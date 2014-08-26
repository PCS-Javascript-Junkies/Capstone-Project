var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var weatherDisplayTemplate = require('../../templates/weather-display-template.hbs');

var WeatherDisplayView = Backbone.View.extend({
  el: '#weather-display',
  render: function () {
    var self = this;
    $.ajax({
      url: "./weather",
      data: "",
      success: function(val){
        $(self.el).html(weatherDisplayTemplate({weatherData: val}));
      }
    });
  }
});

module.exports = WeatherDisplayView;