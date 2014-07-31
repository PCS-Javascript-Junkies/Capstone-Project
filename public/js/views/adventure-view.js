var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var StepOneView = require('./step-one-view.js');
var Adventure = require('../models/adventure.js');

var adventureTemplate = require('../../templates/adventure-parent.hbs')

var AdventureView = Backbone.View.extend({
  el: '#adventure-steps',
  model: new Adventure(),
  initialize: function () {
    $(this.el).html(adventureTemplate);
  },
  render: function () {
    var stepOneView = new StepOneView({model: this.model});
    stepOneView.render();$
    ('#steps').html(stepOneView.$el);
  }

});

module.exports = AdventureView;