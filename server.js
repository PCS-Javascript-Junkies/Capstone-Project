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


// no longer working? is that ok?
app.get('/api/themes/:weather/:geoLocation', function (req, res) {
  var data = {
    "weather": req.params.weather,
    "location": req.params.geoLocation,
  };
  if (req.params.weather === "outside" && req.params.geoLocation === "se") {
    var data = {
      "themes": [{"title":"breweries"}, {"title":"active"}, {"title":"tgif"}]
    }
  } else {
    var data = {
      "themes": ["not a valid param"]
    }
  }
  res.json(data);
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
  function forecastRequester (){
    var options = {
      APIKey: "1f75a50387fa44c9015e4edc8fce57fc",
      timeout: 1000
    };

      var forecast = new Forecast(options);
    var latitude = "45.5234515";
      var longitude = "-122.6762071";

    forecast.get(latitude, longitude, function (err, res, data) {
      if (err) throw err;
      console.log('res: ' + util.inspect(res));
      console.log('data: ' + util.inspect(data));

        //use a return statement to retrieve the return data.forcast.summary (or something) 
    });
  }
  var results = forecastRequester();
  res.send(200, results);
});

// if(queryThis('foo')) { doThat(); }

// function queryThis(parameter) {
//     // some code
//     return true;
// }

//db.deleteCollection('bb-todos');

// app.get('/api/adventures', function (req, res) {
//   var todos = [];
//   db.list('Adventures')
//   .then(function (result) {
//     result.body.results.forEach(function (item){
//       todos.push(item.value);
//     });
//     res.json(todos);
//     console.log(todos);
//   })
//   .fail(function (err) {
//     console.error(err);
//   });
// });

// app.post('/api/todos', function (req, res){
//   req.accepts('application/json');
//   console.log(req.body);
//   db.put('bb-todos', ('todo' + req.body.creationDate), req.body)
//   .then(function (){
//     console.log(req.body);
//     res.send(200, 'ok, we added your todo, here is what you added');
//   })
//   .fail(function (err) {
//     console.error(err);
//   });
// });

// app.get('/api/contacts', function (req, res) {
//   var contacts = [];
//   db.list('bb-contacts')
//   .then(function (result) {
//     result.body.results.forEach(function (item){
//       contacts.push(item.value);
//     });
//     console.log(contacts);
//     res.json(contacts);
//   })
//   .fail(function (err) {
//     console.error(err);
//   });
// });

// app.post('/api/contacts', function (req, res){
//   req.accepts('application/json');
//   console.log(req.body);
//   db.put('bb-contacts', ('contact' + req.body.creationDate), req.body)
//   .then(function (result){
//     res.send(200, 'ok, we added your contact');
//   })
//   .fail(function (err) {
//     console.error(err);
//   });
// });


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
