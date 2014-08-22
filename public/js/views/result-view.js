var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var resultTemplate = require('../../templates/result-template.hbs');
//var yelpAPI = require('../yelpAPI.js');

var ResultView = Backbone.View.extend({
  el: '#adventure-parent',
  render: function () {
    console.log("render result view");
    console.log(this.model);
    var displayResults = this.model;
    $(this.el).html(resultTemplate({displayResults: displayResults}));
    
    beg=[45.522,-122.690];
  	mid=[45.52,-122.673];
  	last=[45.532,-122.690];
  	cent=[45.522, -122.672];


  	googleMaps(beg,mid,last, cent);
  }
});

module.exports = ResultView;