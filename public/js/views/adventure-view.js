var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var StepOneView = require('./step-one-view.js');
var Adventure = require('../models/adventure.js');

var adventureTemplate = require('../../templates/adventure-parent.hbs');
var stepOneTemplate = require('../../templates/adventure-step-one.hbs');

var AdventureView = Backbone.View.extend({
  el: '#adventure-parent',
  model: new Adventure(),
  initialize: function () {
  },
  render: function () {
    $(this.el).html(adventureTemplate);
    var stepOneView = new StepOneView({model: this.model});
    console.log("heeey");
    stepOneView.render();
  }

});

module.exports = AdventureView;