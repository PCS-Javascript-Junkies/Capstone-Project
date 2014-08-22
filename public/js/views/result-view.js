var $ = require('jquery');
var Backbone = require('backbone');
var Adventure = require('../models/adventure.js');
Backbone.$ = $;

var resultTemplate = require('../../templates/result-template.hbs');

var StoryCollection = Backbone.Collection.extend({
  model: Adventure,
  url:'/api/stories',
  //comparator: "title"
});

var storyCollection = new StoryCollection();


var ResultView = Backbone.View.extend({
  el: '#adventure-parent',
  render: function () {
    var displayResults = this.model;
    $(this.el).html(resultTemplate({displayResults: displayResults}));

    beg= this.model.changed.results[0].address + " Portland, OR";
  	mid=this.model.changed.results[1].address + " Portland, OR";
  	last=this.model.changed.results[2].address + " Portland, OR";
  	cent= this.model._previousAttributes.geolocation;

  	storyCollection.create(this.model);
    googleMaps(beg,mid,last, cent);
  }
});

module.exports = ResultView;