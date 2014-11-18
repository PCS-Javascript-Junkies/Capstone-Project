var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var gettingStartedTemplate = require('../../templates/getting-started-template.hbs');
var LocationChoiceView = require('./location-choice-view.js');

var GettingStartedChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
  },
  // no need for the initialize because we are 
  // specifically calling render in our server.js
  initialize: function () {
  },
  render: function () {
    $(this.el).html(gettingStartedTemplate);
  },
});

module.exports = GettingStartedChoiceView;