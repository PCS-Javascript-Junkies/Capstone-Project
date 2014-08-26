var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var themeChoiceTemplate = require('../../templates/theme-choice-template.hbs');
var QuestionView = require('./question-view.js');

var ThemeChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click .theme-choice': 'chooseTheme'
  },
  chooseTheme: function (event) {
    var event = event.target.id;
    var clickedThemeId = event + "Theme";
    this.model.set({theme: clickedThemeId});
    var self = this;
    var callback = function() {
      setTimeout(function() {
        self.loadQuestionView();
      }, 500);
    }
    this.pickStory(callback());
  },
  pickStory: function(callback) {
    var pickedTheme = this.model.attributes.theme;
    var max = 1;
    var index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    var pickedStory = tree.current.theme[pickedTheme].stories[index];
    this.model.set({story: pickedStory});
  },
  loadQuestionView: function () { //generalized function that calls the generic question view
    tree.current = tree.current.theme[this.model.attributes.theme].next;
    var questionView = new QuestionView({model: this.model});
    questionView.render();
  },
  render: function () {
    var themes = tree.current.themes;
    var treeData = tree.current;
    $(this.el).html(themeChoiceTemplate({treeData: treeData}));  },
});

module.exports = ThemeChoiceView;