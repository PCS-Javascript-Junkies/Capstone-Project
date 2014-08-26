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
  el: '#app-home',
    initialize: function () {
   //   var self = this;
      storyCollection.fetch();

      this.listenTo(storyCollection, 'sort', this.render); //'refrsh on story sort'
    },
    render: function () {
      results =[];
      temp="";
      storyCollection.models.forEach(function(model){
        results.push(model.attributes.results);
      });

      console.log(results, "results");
      temp += "<div class='library' style ='padding-top: 10em; padding-left:5em;'>"
      results.forEach(function(story){
      temp += "<div class = 'story' style = 'padding-top:1em'>" + 
                "<table>" +
                  "<tbody>" +
                    "<tr>" +
                    "<td>" 
                          for(i=0; i<story.length; i++){
                            temp += story[i].name + ", "; 
                             };

                    temp += "</td>" +
                    "</tr>" +
                  "</tbody>" +
                "</table>"

      });
      temp += "</div>";
       
     $(this.$el).html(temp);
   }
  });

temp = '';


module.exports = LibraryView;