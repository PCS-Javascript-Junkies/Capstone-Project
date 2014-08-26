var $ = require('jquery');
var Backbone = require('backbone');
var Adventure = require('../models/adventure.js');
Backbone.$ = $;

var resultTemplate = require('../../templates/library-template.hbs');

var StoryCollection = Backbone.Collection.extend({
  model: Adventure,
  url:'/api/stories',
  //comparator: "title"
});

var storyCollection = new StoryCollection();


var LibraryView = Backbone.View.extend({
  el: '#adventure-parent',
    initialize: function () {
   //   var self = this;
      storyCollection.fetch();

      this.listenTo(storyCollection, 'sort', this.render); //'refrsh on story sort'
    },
    render: function () {
      temp ="";
        console.log(storyCollection.length);
        console.log(storyCollection);
      //   $(this.$el).html(temp);
   }
  });

temp = '';


module.exports = LibraryView;