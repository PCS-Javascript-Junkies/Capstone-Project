var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var questionTemplate = require('../../templates/question-template.hbs');
var ResultView = require('./result-view.js');
var questionLevel = 0;
var imageLevel = 1;

var QuestionView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click .question-choice': 'chooseQuestion'
  },
  initialize: function () {
    this.model.set({imageLevel: imageLevel});
    this.model.on("change:results", this.renderNextQuestion, this)
  },
  pickRandomQuestion: function () {
    var max = tree.current.questions.length - 1;
    console.log(max);
    var index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return tree.current.questions[index];
  },
  chooseQuestion: function (event) {
    var self = this;
    function writeModel() {
      console.log(yelpresult);
      if (yelpresult.img !== undefined) {
        var imageUrl = yelpresult.img;
        console.log(imageUrl);
        var regExImg = /\/ms\./;
        yelpresult.img = yelpresult.img.replace(regExImg, "/l.");
      }
      self.model.set({ 
          "results" : self.model.get('results').concat(yelpresult)
      });
      self.model.attributes["level" + questionLevel] = yelpKeywordArray;
      console.log("model as of now:",self.model);
    }
    var event = event.target.id;
    var clickedQuestionId = event;
    var yelpKeywordArray = tree.current.buttons[clickedQuestionId].values;
    console.log("location:", this.model.attributes.geolocation);
    var yelpresult = yelpAPI(this.model.attributes.latlong, yelpKeywordArray, writeModel);
  },
  renderNextQuestion: function (callback) {
    if (tree.current.next === null) {
      var resultView = new ResultView({model: this.model});
      console.log("model result length:",this.model.attributes.results.length);
      console.log(this.model);

        resultView.render();


    } else {
      questionLevel++;
      imageLevel++;
      this.model.set({imageLevel: imageLevel});
      tree.current = tree.current.next;
      this.render();
    }
  },
  render: function () {
    console.log("render question view");
    var imageLevel = "./img/" + this.model.attributes.imageLevel + ".jpg";
    var questionIndex = this.pickRandomQuestion();
    var currentTree = tree.current;
    $(this.el).html(questionTemplate({imageLevel: imageLevel, questionIndex: questionIndex, currentTree: currentTree}));
  }
});

module.exports = QuestionView;