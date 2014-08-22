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
    
    var beg=[45.522,-122.690];
	var mid=[45.52,-122.673];
	var last=[45.532,-122.690];
	var cent=[45.522, -122.672];

  console.log("***************1");
	googleMaps(beg,mid,last, cent);
  }
});

module.exports = ResultView;