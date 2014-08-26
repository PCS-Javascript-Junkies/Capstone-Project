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
    'click #location-north': 'clickNorth',
    'click #location-southwest': 'clickSouthwest',
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
  clickNorth: function() {
    this.model.set({geolocation: "Northwest Portland, Portland, OR"});
    this.model.set({latlong: "45.520449,-122.728701|45.614814,-122.665958"});
    this.loadThemeChoiceView();
  },
  clickSouthwest: function() {
    this.model.set({geolocation: "Southwest Portland, Portland, OR"});
    this.model.set({latlong: "45.468856,-122.745953|45.52278,-122.666945"});
    this.loadThemeChoiceView();
  },
  clickAll: function() {
    this.model.set({latlong: "45.427597,-122.830582|45.681464,-122.399368"})
    this.model.set({latlong: "45.522961,-122.664886|45.588724,-122.53541"});
    this.model.set({geolocation: "Portland"});
    this.loadThemeChoiceView();
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