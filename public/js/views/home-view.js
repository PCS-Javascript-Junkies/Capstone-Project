var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureView = require('./adventure-view.js');

var homeTemplate = require('../../templates/home-view.hbs');
var adventureTemplate = require('../../templates/adventure-parent.hbs');

var HomeView = Backbone.View.extend({
  el: '#app-home',
  events: {
    'click #begin-adventure': 'beginAdventure'
  },
  beginAdventure: function () {
    var adventureView = new AdventureView(); //attach collections/models here, calls initialize but not render at this point
    adventureView.render(); //order matters
  },
  render: function () {
    $(this.el).html(homeTemplate);
  }
});

module.exports = HomeView;