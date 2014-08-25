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
    this.model.set({geolocation: "Southeast Portland, Portland, OR"});
    this.model.set({latlong: "45.459871,-122.667129|45.52248,-122.537341"});
    this.loadThemeChoiceView();
  },
  clickNortheast: function() {
    this.model.set({geolocation: "Northeast Portland, Portland, OR"});
    this.model.set({latlong: "45.522961,-122.664886|45.588724,-122.53541"});
    this.loadThemeChoiceView();
  },
  clickWest: function() {
    this.model.set({geolocation: "west"});
    this.loadThemeChoiceView();
  },
  clickAll: function() {
    this.model.set({geolocation: "Portland"});
    this.loadThemeChoiceView();
  },
  render: function () {
    console.log("tree after weather choice", tree.current);
    $(this.el).html(locationChoiceTemplate);
  },
  loadThemeChoiceView: function () {
    var themeChoiceView = new ThemeChoiceView({model: this.model});
    themeChoiceView.render();
  }
});

module.exports = LocationChoiceView;