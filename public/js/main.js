var $ = require('jquery');
var place = require('locations');
var Backbone = require('backbone');
Backbone.$ = $;

<<<<<<< HEAD
var AdventureView = require('./views/adventure-view');
var HomeView = require('./views/home-view');

// var Router = Backbone.Router.extend({
//   routes: {
//     '': 'callAdventureView'
//   },
//   callAdventureView: function () {
//     this.adventureView = new AdventureView();
//     this.adventureView.render();
//   }
// });

=======
var fooBar = new place('myBar','1003 sw fakerson st', 'moody');

console.log(fooBar);

var MainView = require('./views/main-view');
>>>>>>> master

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
