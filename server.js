var fs = require('fs');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config.js');
var consolidate = require('consolidate');
var Handlebars = require('handlebars');
var Forecast = require('forecast.io');
var util = require('util');
// var forecaster = require('./forecast.js');

//process.env(DB_KEY)
var db = (require('orchestrate')(config.dbKey) || require('orchestrate')(process.env(DB_KEY)));

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/server-templates');

var partials = "./server-templates/partials/";
fs.readdirSync(partials).forEach(function (file) {
  var source = fs.readFileSync(partials + file, "utf8"),
      partial = /(.+)\.html/.exec(file).pop();

  Handlebars.registerPartial(partial, source);
});

// express routes
app.get('/', function (req, res) {
  res.render('./index.html');
});

app.get('/about', function (req, res) {
  res.render('./about.html');
});

app.get('/api/stories', function (req, res) {
  var list = [];
  db.list('Stories')
  .then(function (result) {
  result.body.results.forEach(function (item){
     list.push(item.value);
    });
    res.json(list);
  })
  .fail(function (err) {
    console.error(err);
  });
});

app.post('/api/stories', function (req, res){
  var d = new Date();
  req.accepts('application/json');
  db.put('Stories', ('story' +d.getTime()), req.body)
  .then(function (){
    res.send(200, 'ok, we added your story, here is what you added');
  })
  .fail(function (err) {
    console.error(err);
  });
});

app.get("/weather", function (req, res) {
  function forecastRequester (callback) {
    var options = {
      APIKey: "1f75a50387fa44c9015e4edc8fce57fc",
      timeout: 5000
    };

    var forecast = new Forecast(options);
    var latitude = "45.5234515";
    var longitude = "-122.6762071";

    var realData;
    var response = forecast.get(latitude, longitude, function (err, response, data) {
      if (err) throw err;
      res.json(data);
    });
  }
  forecastRequester();
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port # ' + app.get('port'));
});
