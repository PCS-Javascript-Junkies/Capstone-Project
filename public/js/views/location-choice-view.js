var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var locationChoiceTemplate = require('../../templates/location-choice-template.hbs');

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
    console.log(this.model);
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
    console.log("geolocation choice");
  }
});

module.exports = LocationChoiceView;