var $ = require('jquery');
var place = require('locations');
var Backbone = require('backbone');
Backbone.$ = $;

var fooBar = new place('myBar','1003 sw fakerson st', 'moody');

console.log(fooBar);

var MainView = require('./views/main-view');

var Router = Backbone.Router.extend({
  routes: {
    '': 'main'
  },
  main: function () {
    this.mainView = new MainView();
    this.mainView.render();
  }
});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});
