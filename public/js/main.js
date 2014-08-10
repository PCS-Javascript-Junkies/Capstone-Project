var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureParentView = require('./views/adventure-parent-view');

var Router = Backbone.Router.extend({
  routes: {
    '': 'callAdventureParentView'
  },
  callAdventureParentView: function () {
    console.log("adventure parent view");
    this.adventureParentView = new AdventureParentView();
    this.adventureParentView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});