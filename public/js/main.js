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

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-45.5234515, 122.6762071),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("app-home"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
  }

$(function () {
  window.app = new Router();
  Backbone.history.start();

  initialize();
});