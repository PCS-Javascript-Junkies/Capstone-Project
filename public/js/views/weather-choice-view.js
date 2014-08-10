var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var weatherChoiceTemplate = require('../../templates/weather-choice-template.hbs');

var WeatherChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  initialize: function () {
  },
  render: function () {
    $(this.el).html(weatherChoiceTemplate);
    console.log(this.model);
  }
});

module.exports = WeatherChoiceView;