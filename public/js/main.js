var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var dbTree = require('../database/dbMain.js');
var AdventureView = require('./views/adventure-view');
var HomeView = require('./views/home-view');
var yelpAdventure1 = require('./yelpAdventure1'); //Need to confirm placement/syntax


var Router = Backbone.Router.extend({
  routes: {
    '': 'callHomeView'
  },
  callHomeView: function () {
    this.homeView = new HomeView();
    this.homeView.render();
  }
});
