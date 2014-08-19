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
  }
});

module.exports = ResultView;