var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var StepOneView = require('./step-one-view.js');

var adventureTemplate = require('../../templates/adventure-parent.hbs');
var stepOneTemplate = require('../../templates/adventure-step-one.hbs');

var AdventureView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click #0': 'clickFirst'
  },
  initialize: function () {

  },
  pickQuestion: function () {

  },
  clickFirst: function () {

  },
  render: function () {
    var currentDisplay = tree.current;
    $(this.el).html(adventureTemplate({displayData: currentDisplay, savedQuestions: this.model}));
  }

});

module.exports = AdventureView;