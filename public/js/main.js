var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureView = require('./views/home-view');

var Router = Backbone.Router.extend({
  routes: {
    '': 'callAdventureView'
  },
  callAdventureView: function () {
    this.adventureView = new AdventureView();
    this.adventureView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});