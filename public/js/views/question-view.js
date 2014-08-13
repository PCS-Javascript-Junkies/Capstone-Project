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
    var max = tree.current.questions.length - 1;
    console.log(max);
    var index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return tree.current.questions[index];
  },
  stepOneChoiceA: function () {
  },
  render: function () {
    console.log("render question 1");
    var questionIndex = this.pickRandomQuestion();
    var currentTree = tree.current;
    $(this.el).html(questionTemplate({questionIndex: questionIndex, currentTree: currentTree}));
  }
});

module.exports = QuestionView;