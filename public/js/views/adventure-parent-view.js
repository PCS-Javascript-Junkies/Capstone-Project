var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Adventure = require('../models/adventure.js');
var WeatherChoiceView = require('./weather-choice-view.js');
var adventureParentTemplate = require('../../templates/adventure-parent-template.hbs');

var AdventureParentView = Backbone.View.extend({
  el: '#app-home',
  model: new Adventure(),
  render: function () {
    $(this.el).html(adventureParentTemplate);
    var weatherChoiceView = new WeatherChoiceView({model: this.model});
    weatherChoiceView.render();
  }
});

module.exports = AdventureParentView;