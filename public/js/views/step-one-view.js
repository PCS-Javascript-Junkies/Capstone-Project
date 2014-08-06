var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var stepOneTemplate = require('../../templates/adventure-step-one.hbs');

var StepOneView = Backbone.View.extend({
  el: '#steps',
  events: {
    'click #step1-choice-a': 'stepOneChoiceA',
    'click #step1-choice-b': 'step2ChoiceB'
  },
  initialize: function () {
    this.listenTo(this.model,'all', this.render);
  },
  stepOneChoiceA: function () {
    console.log("clicked choice 1");
    this.model.stepOne = 'A';
    console.log(this.model.stepOne);
  },
  render: function () {
    console.log("render question 1");
    console.log(this.model.nameTest);
    $('#steps').html(stepOneTemplate);
  }
});

module.exports = StepOneView;