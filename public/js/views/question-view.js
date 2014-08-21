var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var questionTemplate = require('../../templates/question-template.hbs');
var ResultView = require('./result-view.js');
var questionLevel = 0;
//var yelpAPI = require('../yelpAPI.js');

var QuestionView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click .question-choice': 'chooseQuestion'
  },
  // initialize: function () {
  //   this.model.on("change:results", this.renderNextQuestion, this)
  // },
  pickRandomQuestion: function () {
    var max = tree.current.questions.length - 1;
    console.log(max);
    var index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return tree.current.questions[index];
  },
  setYelpData: function () {
    var clickedQuestionId = event.target.id;
    var yelpKeywordArray = tree.current.buttons[clickedQuestionId].values;
    var yelpresult = yelpAPI("Portland", yelpKeywordArray);
    console.log(yelpresult);
    this.model.set({ 
        "results" : this.model.get('results').concat(yelpresult)
    });
    this.model.attributes["level" + questionLevel] = yelpKeywordArray;
    console.log("model as of now:",this.model);
  },
  chooseQuestion: function () {
    // var clickedQuestionId = event.target.id;
    // var yelpKeywordArray = tree.current.buttons[clickedQuestionId].values;
    // var yelpresult = yelpAPI("Portland", yelpKeywordArray);
    // console.log(yelpresult);
    // this.model.set({ 
    //     "results" : this.model.get('results').concat(yelpresult)
    // });
    // //this.model.set(yelpKeywordArray);
    // this.model.attributes["level" + questionLevel] = yelpKeywordArray;
    // console.log("model as of now:",this.model);
    this.renderNextQuestion(this.setYelpData());
  },
  renderNextQuestion: function (callback) {
    if (tree.current.next === null) {
      var resultView = new ResultView({model: this.model});

        resultView.render();

    } else {
      questionLevel++;
      tree.current = tree.current.next;
      this.render();
    }
  },
  render: function () {
    console.log("render question view");
    console.log(this.model);
    var questionIndex = this.pickRandomQuestion();
    var currentTree = tree.current;
    $(this.el).html(questionTemplate({questionIndex: questionIndex, currentTree: currentTree}));
  }
});

module.exports = QuestionView;