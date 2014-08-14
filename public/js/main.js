var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureParentView = require('./views/adventure-parent-view');

var QuestionTree = require('../database/dbMain.js');
var questionTree = new QuestionTree();
questionTree.initialize();
console.log(tree);

var Router = Backbone.Router.extend({
  routes: {
    '': 'callAdventureParentView'
  },
  callAdventureParentView: function () {
    this.adventureParentView = new AdventureParentView();
    this.adventureParentView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});