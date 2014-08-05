var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureView = require('./views/adventure-view');
var HomeView = require('./views/home-view');

var Router = Backbone.Router.extend({
  routes: {
    '': 'callHomeView',
    'adventure-step-1': 'callAdventureView'
  },
  callHomeView: function () {
    this.homeView = new HomeView();
    this.homeView.render();
  },
  callAdventureView: function () {
    console.log("called from url");
    this.adventureView = new AdventureView();
    this.adventureView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});