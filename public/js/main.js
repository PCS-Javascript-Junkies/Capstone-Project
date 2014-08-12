var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureView = require('./views/adventure-view');
var Adventure = require('./models/adventure.js');
var HomeView = require('./views/home-view');

var yelpAdventure1 = require('./yelpAdventure1'); //Need to confirm placement/syntax

var QuestionTree = require('../database/dbMain.js');
var questionTree = new QuestionTree();
questionTree.initialize();
console.log(questionTree);

var Router = Backbone.Router.extend({
  routes: {
    '': 'callParentView'
  },
  callParentView: function () {
    console.log("home view called!");
    this.homeView = new HomeView();
    this.homeView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});
