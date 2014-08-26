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
    this.model.set({story: tree.current.theme[clickedThemeId].stories[0]})
    tree.current = tree.current.theme[clickedThemeId].next;
    this.loadQuestionView();
  },
  loadQuestionView: function () { //generalized function that calls the generic question view
    var questionView = new QuestionView({model: this.model});
    questionView.render();
  },
  render: function () {
    var themes = tree.current.themes;
    var treeData = tree.current;
    $(this.el).html(themeChoiceTemplate({treeData: treeData}));  },
});

module.exports = ThemeChoiceView;