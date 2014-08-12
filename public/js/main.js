var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var QuestionTree = require('../database/dbMain.js');
var AdventureView = require('./views/adventure-view');
var HomeView = require('./views/home-view');
var yelpAdventure1 = require('./yelpAdventure1'); //Need to confirm placement/syntax

        var tree = new QuestionTree();

        tree.startTree();

        var questions = ["Question-1 ","Question-2 ", "Question-3 ",
         "Question-4 ","Question-5 "];
        var theme = ["chill","kids","foodie","hosting","active",
                    "tgif","nightOut","brewery"];
        var level = ["","mainItem", "breatherItem", "endingItem" ];

        tree.root.questions=questions; 

        //outside theme building
        theme.forEach(function(item){
            tree.buildTheme("outside", item);
        });

        //build inside theme
        theme.forEach(function(item){
            tree.buildTheme("inside", item);
        });
        for(var i =0; i< 8; ++i){
        tree.addToTheme("outside", theme[i],
            level[1],questions);

        tree.addToTheme("outside", theme[i],
            level[2],questions);

        tree.addToTheme("outside", theme[i],
            level[1],questions);

        tree.addToTheme("outside", theme[i],
            level[3],questions);
        }


        for(var i =0; i< 8; ++i){
        tree.addToTheme("inside", theme[i],
            level[1],questions);

        tree.addToTheme("inside", theme[i],
            level[2],questions);

        tree.addToTheme("inside", theme[i],
            level[1],questions);

        tree.addToTheme("inside", theme[i],
            level[3],questions);
        }


var Router = Backbone.Router.extend({
  routes: {
    '': 'callHomeView'
  },
  callHomeView: function () {
    this.homeView = new HomeView();
    this.homeView.render();
  }
});
