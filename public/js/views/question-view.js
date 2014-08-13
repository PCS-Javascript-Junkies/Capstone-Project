var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var questionTemplate = require('../../templates/question-template.hbs');

var QuestionView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click #step1-choice-a': 'stepOneChoiceA',
    'click #step1-choice-b': 'step2ChoiceB'
  },
  pickRandomQuestion: function () {
    var index = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    return tree.current.questions[index];
  },
  stepOneChoiceA: function () {
  },
  render: function () {
    console.log("render question 1");
    var questionIndex = this.pickRandomQuestion();
    $(this.el).html(questionTemplate({questionIndex: questionIndex}));
  }
});

module.exports = QuestionView;