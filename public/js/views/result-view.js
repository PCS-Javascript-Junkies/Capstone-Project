var $ = require('jquery');
var Backbone = require('backbone');
var Adventure = require('../models/adventure.js');
Backbone.$ = $;

var resultTemplate = require('../../templates/result-template.hbs');

var StoryCollection = Backbone.Collection.extend({
  model: Adventure,
  url:'/api/stories',
});

var storyCollection = new StoryCollection();


var ResultView = Backbone.View.extend({
  el: '#adventure-parent',
  render: function () {
    var displayResults = this.model;
    $(this.el).html(resultTemplate({displayResults: displayResults}));

    for(i=0; i<3; ++i){
        for(j=1; i <3; ++i){
        if(this.model.changed.results[i].name === this.model.changed.results[j].name && i !== j);
        //this.model.changed.results[i]
        };
    };

    beg= this.model.changed.results[0].address + " Portland, OR";
  	mid=this.model.changed.results[1].address + " Portland, OR";
    secMid=this.model.changed.results[2].address + " Portland, OR";
  	last=this.model.changed.results[3].address + " Portland, OR";
  	cent= this.model._previousAttributes.geolocation;
    console.log("----------->",this.model);

  	storyCollection.create(this.model);
    googleMaps(beg,mid,secMid, last, cent);
  }
});

module.exports = ResultView;
