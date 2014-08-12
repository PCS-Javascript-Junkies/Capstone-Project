var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var locationChoiceTemplate = require('../../templates/location-choice-template.hbs');
var ThemeChoiceView = require('./theme-choice-view.js');

var LocationChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click #location-se': 'clickSoutheast',
    'click #location-ne': 'clickNortheast',
    'click #location-west': 'clickWest',
    'click #location-all': 'clickAll'
  },
  initialize: function () {
  },
  clickSoutheast: function() {
    this.model.set({geolocation: "se"});
    this.loadThemeChoiceView();
  },
  clickNortheast: function() {
    this.model.set({geolocation: "ne"});
  },
  clickWest: function() {
    this.model.set({geolocation: "west"});
  },
  clickAll: function() {
    this.model.set({geolocation: "all"});
  },
  render: function () {
    $(this.el).html(locationChoiceTemplate);
  },
  loadThemeChoiceView: function () {
    var themeChoiceView = new ThemeChoiceView({model: this.model});
    themeChoiceView.render();
  }
});

module.exports = LocationChoiceView;