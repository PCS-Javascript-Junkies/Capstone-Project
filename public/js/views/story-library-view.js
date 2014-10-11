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
    },
    render: function () {
      var modelArray =[];
      var temp ="";
      var themeSelect = "";
      var self = this;
      temp += "<div class='progression-image' style=' padding-left: 2em; max-width: 1100px;" +
        " padding-top: 19.5em; margin-top: 1em; " +
        "background: url(../../img/fremont.jpg) 0% 50% no-repeat;'>  <br>" +
        selectorTemplate();
      temp += "</div>";
    this.$el.html(temp);
    $('#selectForm').change(function(){self.setPage()});
    },

    setPage: function(select){
      var self = this;
      var temp ="";
      var themeSelect = "";
      var results =[];
      if($('#library')){
        $('#library').remove();
      }
      temp = this.$el.html();
       temp += "<div id='library' style=' padding-left: 2em; max-width: 1100px;" +
        " padding-top: 4.5em; margin-top: 1em; margin-right: auto; margin-left: auto;' >";

      themeSelect= $("#selectForm").val();
      storyCollection.models.forEach(function(model){
        model.attributes.results.theme= model.attributes.theme;
      });

      var modelArray= storyCollection.where({theme: themeSelect});
      modelArray.forEach(function (model){
          results.unshift(model.attributes.results);
        });


    console.log(results, "<----results");

    for(i =0; i< results.length; ++i){
      temp += resultTemplate({adventure: results[i]})+"<i class= 'icon-arrow-right'></i>";
      temp += "<section style ='width: 1em;'>&nbsp;</section>"
    }
    temp += "</div>"
     this.$el.html(temp);
    $('#selectForm').change(function(){self.setPage()});
    }

});

module.exports = LibraryView;


