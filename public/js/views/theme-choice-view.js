var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var themeChoiceTemplate = require('../../templates/theme-choice-template.hbs');
var QuestionView = require('./question-view.js');

var ThemeChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    'click #chill': 'chooseChillTheme',
    'click #brewery': 'chooseBreweryTheme'
  },
  chooseChillTheme: function () { //repeat this for all themes...
    this.model.set({theme: "chill"});
    var clickedThemeId = event.target.id;
    tree.current = tree.current.theme.chillTheme.next;
    this.loadQuestionView();
  },
  chooseBreweryTheme: function () {
    this.model.set({theme: "brewery"});
    tree.current = tree.current.theme.breweryTheme.next;
    this.loadQuestionView();
  },
  loadQuestionView: function () { //generalized function that calls the generic question view
    var questionView = new QuestionView({model: this.model});
    questionView.render();
  },
  render: function () {
    var themes = tree.current.themes;
    console.log(this.model);
    console.log(this.model.attributes);
    var treeData = tree.current;
    $(this.el).html(themeChoiceTemplate({treeData: treeData}));
    console.log("theme choice view");
  },
});

module.exports = ThemeChoiceView;