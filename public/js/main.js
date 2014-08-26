var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureParentView = require('./views/adventure-parent-view');
var LibaryParentView = require('./views/story-library-view');

//var yelpAPI = require('./yelpAPI.js');
var QuestionTree = require('../database/dbMain.js');
var questionTree = new QuestionTree();
questionTree.initialize();
console.log(tree);

var Router = Backbone.Router.extend({
  routes: {
    '': 'callAdventureParentView',
    'library': 'callLibraryView'
  },
  callAdventureParentView: function () {
    this.adventureParentView = new AdventureParentView();
    this.adventureParentView.render();
  },

  callLibraryView: function () {
    this.LibaryParentView = new LibaryParentView();
    this.LibaryParentView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});