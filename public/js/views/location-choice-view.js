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
    this.model.set({location: "southeast"});
    console.log(this.model);
    // var locationChoiceView = new LocationChoiceView({model: this.model});
    // locationChoiceView.render();
  },
  clickNortheast: function() {
    this.model.set({location: "northeast"});
    console.log(this.model);
  },
  clickWest: function() {
    this.model.set({location: "west"});
    console.log(this.model);
  },
  clickAll: function() {
    this.model.set({location: "all"});
    console.log(this.model);
  },
  render: function () {
    $(this.el).html(locationChoiceTemplate);
    console.log("location choice");
  }
});

module.exports = LocationChoiceView;