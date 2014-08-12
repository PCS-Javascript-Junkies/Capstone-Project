var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AdventureView = require('./adventure-view.js');
var QuestionData = require('../models/questiondata.js');

var homeTemplate = require('../../templates/home-view.hbs');
var adventureTemplate = require('../../templates/adventure-parent.hbs');

var HomeView = Backbone.View.extend({
  el: '#app-home',
  model: new QuestionData(),
  events: {
    'click #begin-adventure': 'beginAdventure'
  },
  beginAdventure: function () {
    var adventureView = new AdventureView({model: this.model}); //attach collections/models here, calls initialize but not render at this point
    adventureView.render(); //order matters
  },
  render: function () {
    console.log(this.model);
    $(this.el).html(homeTemplate);
  }
});

module.exports = HomeView;