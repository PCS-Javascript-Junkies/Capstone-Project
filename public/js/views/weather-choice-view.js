var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var weatherChoiceTemplate = require('../../templates/weather-choice-template.hbs');
var LocationChoiceView = require('./location-choice-view.js');
var WeatherDisplayView = require('./weather-display-view.js');
var GettingStartedChoiceView = require('/getting-started.js')

var WeatherChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click #choice-get-started': 'clickGetStarted',
    'click #choice-outside': 'clickOutside',
    'click #choice-inside': 'clickInside'
  },
  initialize: function () {
  },
  clickGetStarted: function() {
  var gettingStartedChoiceView = new GettingStartedChoiceView({model: this.model});
    gettingStartedChoiceView.render();
  },
  clickOutside: function() {
    this.model.set({weather: "outside"});
    tree.current = tree.current.outsideTree;
    var locationChoiceView = new LocationChoiceView({model: this.model});
    locationChoiceView.render();
  },
  clickInside: function() {
    this.model.set({weather: "inside"});
    tree.current = tree.current.insideTree;
    var locationChoiceView = new LocationChoiceView({model: this.model});
    locationChoiceView.render();
  },
  render: function () {
    $(this.el).html(weatherChoiceTemplate);
    var weatherDisplayView = new WeatherDisplayView();
    weatherDisplayView.render();
  }
});

module.exports = WeatherChoiceView;