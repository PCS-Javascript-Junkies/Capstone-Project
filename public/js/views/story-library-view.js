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
      var temp = '';
       temp += "<div class='progression-image' style='max-width: 1100px; padding-top: 11.5em; padding-bottem: 5em; background: url(../../img/5.jpg) 0% 50% no-repeat; /*background-size:contain;*/'>";
      storyCollection.models.forEach(function(model){
        results.push(model.attributes.results);
      });

      console.log(results, "<----results");

    //results.forEach(function (item){
      for(i =0; i< results.length; ++i){
      temp += resultTemplate({adventure: results[i]});
      }
    // });
    temp += "</div>"
    this.$el.html(temp);
  }

});

module.exports = LibraryView;





//       temp += "<div class='library' style ='padding-top: 10em; padding-left:5em;'>"
//       results.forEach(function(story){
//       temp += "<div class = 'story' style = 'padding-top:1em'>" + 
//                 "<table>" +
//                   "<tbody>" +
//                     "<tr>" +
//                     "<td>" 
//                           for(i=0; i<story.length; i++){
//                             temp += story[i].name + ", "; 
//                              };

//                     temp += "</td>" +
//                     "</tr>" +
//                   "</tbody>" +
//                 "</table>"

//       });
//       temp += "</div>";
       
//      $(this.$el).html(temp);
//    }
//   });

// temp = '';
