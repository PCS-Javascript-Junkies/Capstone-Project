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
  chooseTheme: function (event) { //repeat this for all themes...
    var event = event.target.id;
    // function firefoxFix(event) {
    //   var identifier = event.target.id;
    //   return identifier;
    //   //return event.target.id;
    // }
    // var clickedThemeId = firefoxFix(event) + "Theme";
    console.log("clicked theme id", clickedThemeId);
    var clickedThemeId = event + "Theme";
    this.model.set({theme: clickedThemeId});
    this.model.set({story: tree.current.theme[clickedThemeId].stories[0]})
    console.log(this.model);
    tree.current = tree.current.theme[clickedThemeId].next;
    //this.selectStory();
    this.loadQuestionView();
  },
  // selectStory: function () {

  //   this.loadQuestionView();
  // },
  loadQuestionView: function () { //generalized function that calls the generic question view
    var questionView = new QuestionView({model: this.model});
    questionView.render();
  },
  render: function () {
    var themes = tree.current.themes;
    console.log(this.model);
    console.log(this.model.attributes);
    var treeData = tree.current;
console.log("Tree Data -> ", treeData);
    $(this.el).html(themeChoiceTemplate({treeData: treeData}));
    console.log("theme choice view");
  },
});

module.exports = ThemeChoiceView;