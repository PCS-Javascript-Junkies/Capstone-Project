var Forecast = require('forecast.io');
var util = require('util');

module.exports = function forecastRequester (){
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

//forecastRequester();

