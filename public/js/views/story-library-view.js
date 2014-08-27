var $ = require('jquery');
var Backbone = require('backbone');
var Adventure = require('../models/adventure.js');
Backbone.$ = $;

var selectorTemplate = require('../../templates/selector-template.hbs');
var resultTemplate = require('../../templates/library-template.hbs');

var StoryCollection = Backbone.Collection.extend({
  model: Adventure,
  url:'/api/stories',
  comparator: "key"
});

var storyCollection = new StoryCollection();


var LibraryView = Backbone.View.extend({
  el: '#app-home',
    initialize: function () {
      storyCollection.fetch();
      //this.listenTo(storyCollection, 'sort', this.render); //'refrsh on story sort'
    },
    render: function () {
      console.log("Yay i am here again!");
      var modelArray =[];
      var temp ="";
      var themeSelect = "";
      var self = this;
      temp += "<div class='progression-image' style=' padding-left: 2em; max-width: 1100px;" +
        " padding-top: 11.5em; margin-top: 1em; " +
        "background: url(../../img/5.jpg) 0% 50% no-repeat;'>  <br>" +
        selectorTemplate();
      temp += "</div>"
    this.$el.html(temp);
    $('#selectForm').change(function(){self.setPage()});    
    },

    setPage: function(select){
      var temp ="";
      var themeSelect = "";
      var results =[];
      temp = this.$el.html();
       temp += "<div  style=' padding-left: 2em; max-width: 1100px;" +
        " padding-top: 11.5em; margin-top: 1em;' >"

      themeSelect= $("#selectForm").val();
      // storyCollection.models.forEach(function(model){
      storyCollection.models.forEach(function(model){
        model.attributes.results.theme= model.attributes.theme;
      });

      var modelArray= storyCollection.where({theme: themeSelect});
        modelArray.forEach(function (model){
          results.unshift(model.attributes.results);
        });


    console.log(results, "<----results");

    for(i =0; i< results.length; ++i){
      temp += resultTemplate({adventure: results[i]});
      temp += "<section style ='width: 1em;'>&nbsp;</section>"
    }
    temp += "</div>"
     this.$el.html(temp);
    }

});

module.exports = LibraryView;




    // setPage: function(select){
    //   var temp ="";
    //   var themeSelect = "";
    //   var results =[];
    //   temp = this.$el.html();
    //   themeSelect= $("#selectForm").val();
    //   // storyCollection.models.forEach(function(model){
    //   storyCollection.models.forEach(function(model){
    //     model.attributes.results.theme= model.attributes.theme;
    //   });

    //   var modelArray= storyCollection.where({theme: themeSelect});
    //     modelArray.forEach(function (model){
    //       results.unshift(model.attributes.results);
    //     });


    // console.log(results, "<----results");

    // for(i =0; i< results.length; ++i){
    //   temp += resultTemplate({adventure: results[i]});
    //   temp += "<section style ='width: 1em;'>&nbsp;</section>"
    // }
    // temp += "</div>"
    //  this.$el.html(temp);
    // }


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
