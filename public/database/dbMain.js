//var db = require("./database.js");


function QuestionTree() {
    this.root = null;
    this.current =null;
}


QuestionTree.prototype = {
    startTree: function(insideOutsideQ, AreaQ){
    var theme ={
        // "theme": "themeID",
        // "themeQuestions": null,

        "chillTheme": null,
        "nightOutTheme": null,
        "foodieTheme": null,
        "hostingTheme": null,
        "tgifTheme":null,
        "breweryTheme":null,
        "kidFunTheme":null,
        "activeTheme": null
    };

    var area ={
        "id": "area",
        "questions": null,
        "area": null,
        "theme": null

    };

    var rootNode ={
        "id": "Root",
        "questions": null,
        "insideTree": null,
        "outsideTree": null,
    };

    this.root = rootNode;
    this.current=this.root;
    this.root.insideTree = area;
    this.root.outsideTree= area;
    this.root.outsideTree.theme = theme;
    this.root.insideTree.theme = theme;
    },


    buildTheme: function (inOrOut, id, title){
        var node ={
            "id": id,
            "title": title,
            "next": null
        };

        if(inOrOut === "inside"){
            switch(id){
                case "chill":
                    this.root.insideTree.theme.chillTheme = node;
                    break;
                case "kids":
                    this.root.insideTree.theme.kidFunTheme = node;
                    break;
                case "foodie":
                    this.root.insideTree.theme.foodieTheme = node;
                    break;
                case "hosting":
                    this.root.insideTree.theme.hostingTheme = node;
                    break;
                case "active":
                    this.root.insideTree.theme.activeTheme = node;
                    break;
                case "tgif":
                    this.root.insideTree.theme.tgifTheme = node;
                    break;
                case "nightOut":
                    this.root.insideTree.theme.nightOutTheme = node;
                    break;
                case "brewery":
                    this.root.insideTree.theme.breweryTheme = node;
                    break;
                default:
                    console.log("\nTheme was not formatted correctly");

            }
        }else{
            switch(id){
                case "chill":
                    this.root.outsideTree.theme.chillTheme = node;
                    break;
                case "kids":
                    this.root.outsideTree.theme.kidFunTheme = node;
                    break;
                case "foodie":
                    this.root.outsideTree.theme.foodieTheme = node;
                    break;
                case "hosting":
                    this.root.outsideTree.theme.hostingTheme = node;
                    break;
                case "active":
                    this.root.outsideTree.theme.activeTheme = node;
                    break;
                case "tgif":
                    this.root.outsideTree.theme.tgifTheme = node;
                    break;
                case "nightOut":
                    this.root.outsideTree.theme.nightOutTheme = node;
                    break;
                case "brewery":
                    this.root.outsideTree.theme.breweryTheme = node;
                    break;
                default:
                    console.log("\nTheme was not formatted correctly");

            }
        }
    },

    addToTheme: function (inOrOut, theme, title, type, qArray, bObj){
        var pointer;
        var node ={
            "title": title,
            "id": theme,
            "questions": qArray,
            "buttons": bObj,
            "next": null
        };

        if(inOrOut === "inside"){
            switch(theme){
                case "chill":
                   pointer = this.root.insideTree.theme.chillTheme;
                    break;
                case "kids":
                   pointer = this.root.insideTree.theme.kidFunTheme;
                    break;
                case "foodie":
                   pointer = this.root.insideTree.theme.foodieTheme;
                    break;
                case "hosting":
                   pointer = this.root.insideTree.theme.hostingTheme;
                    break;
                case "active":
                   pointer = this.root.insideTree.theme.activeTheme;
                    break;
                case "tgif":
                   pointer = this.root.insideTree.theme.tgifTheme;
                    break;
                case "nightOut":
                   pointer = this.root.insideTree.theme.nightOutTheme;
                    break;
                case "brewery":
                   pointer = this.root.insideTree.theme.breweryTheme;
                    break;
                default:
                    console.log("\nTheme was not formatted correctly");

            }
        }else{
            switch(theme){
                case "chill":
                   pointer = this.root.outsideTree.theme.chillTheme;
                    break;
                case "kids":
                   pointer = this.root.outsideTree.theme.kidFunTheme;
                    break;
                case "foodie":
                   pointer = this.root.outsideTree.theme.foodieTheme;
                    break;
                case "hosting":
                   pointer = this.root.outsideTree.theme.hostingTheme;
                    break;
                case "active":
                   pointer = this.root.outsideTree.theme.activeTheme;
                    break;
                case "tgif":
                   pointer = this.root.outsideTree.theme.tgifTheme;
                    break;
                case "nightOut":
                   pointer = this.root.outsideTree.theme.nightOutTheme;
                    break;
                case "brewery":
                   pointer = this.root.outsideTree.theme.breweryTheme;
                    break;
                default:
                    console.log("\nadd was not formatted correctly");
            }
        }
        if(pointer.next === null){
            pointer.next = node;
        }else{
            pointer = pointer.next;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next=node;
        }
    },

initialize: function (){
        tree = new QuestionTree();

        tree.startTree();

        var barQuestions = ["Do you feel like beer, wine, or spirits? ",
        "In the mood for hops, grapes, or the hard stuff? ", "If you are at a bar you would order: ",];


        var barButton=[
        {title:"Beer", id:"beer", values:["irish_pubs","pubs","breweries","sportsbars"]},
        {title:"Wine", id:"wine", values:["wine_bars","champagne_bars","beer_and_wine"]},
        {title:"Mixed Drinks", id:"liquor", values:["distilleries","cocktailbars","lounges","pianobars"]},
        {title:"Surprise Me", id:"all", values:["irish_pubs","pubs","breweries","sportsbars","wine_bars",
        "champagne_bars","beer_and_wine","distilleries","cocktailbars","lounges,pianobars"]},
        ];

        var breakQuestions = ["To take it down a notch you A) listen to music, B) like coffee and tee, C) 'I dont understand the words take a break' ",
                            "After a few hours of drinking I feel like food, a quick snack, or more drinking! (resposibly)"];

        var breakButton=[
        {title:"Music Sounds Nice", id:"music", values:["musicvenues","pianobars","breweries","jazzandblues"]},
        {title:"Tea Time", id:"coffee", values:["coffee","tea",]},
        {title:"Keep the Party Gong!", id:"again", values:["distilleries","cocktailbars","lounges","pianobars"]},
        {title:"Chow Time", id:"food", values:["irish_pubs","pubs","breweries","sportsbars"]},
        ];

        var wrapQuestions = ["Desert, Drinks again, or greasy food?"];

        var wrapButton =[
        {title:"Desert", id:"Desert", values:["cupcakes","desserts","donuts"]},
        {title:"Keep the Party Gong!", id:"again", values:["irish_pubs","pubs","breweries","sportsbars",
        "wine_bars","champagne_bars","beer_and_wine", "distilleries","cocktailbars","lounges","pianobars"]},
        {title:"Chow Time", id:"food", values:["irish_pubs","pubs","breweries","sportsbars"]},
        ];


        var barNode = tree.root.insideTree.theme.breweryTheme;



        var questions = ["Test Question-1 "," Test Question-2 ", " Test Question-3 ",
         "Test Question-4 ","Test Question-5 "];

        var theme = ["chill","kids","foodie","hosting","active",
                    "tgif","nightOut","brewery"];

        var title = ["Take It Easy","Fun With The Kids","Explor My Inner Foodie","Hosting Guests","Active and Energetic",
                    "It's Friday!","Night On the Town","Breweries, Wineries, and more"];

        var level = ["","mainItem", "breatherItem", "endingItem" ];

        tree.root.questions=questions;

        //outside theme building
        theme.forEach(function(item, index){
            tree.buildTheme("outside", item, title[index]);
        });

        //build inside theme
        theme.forEach(function(item, index){
            tree.buildTheme("inside", item, title[index]);
        });
        for(var i =0; i< 8; ++i){
        tree.addToTheme("outside", theme[i], title[i],
            level[1],questions);

        tree.addToTheme("outside", theme[i], title[i],
            level[2],questions);

        tree.addToTheme("outside", theme[i], title[i],
            level[1],questions);

        tree.addToTheme("outside", theme[i], title[i],
            level[3],questions);
        }


        for(var i =0; i< 8; ++i){
        tree.addToTheme("inside", theme[i], title[i],
            level[1],questions);

        tree.addToTheme("inside", theme[i], title[i],
            level[2],questions);

        tree.addToTheme("inside", theme[i], title[i],
            level[1],questions);

        tree.addToTheme("inside", theme[i], title[i],
            level[3],questions);
        }




        tree.root.insideTree.theme.breweryTheme.next.questions = barQuestions;
        tree.root.insideTree.theme.breweryTheme.next.buttons = barButton;
        tree.root.insideTree.theme.breweryTheme.next.next.questions = breakQuestions;
        tree.root.insideTree.theme.breweryTheme.next.next.buttons = breakButton;
        tree.root.insideTree.theme.breweryTheme.next.next.next.questions = barQuestions;
        tree.root.insideTree.theme.breweryTheme.next.next.next.buttons = barButton;
        tree.root.insideTree.theme.breweryTheme.next.next.next.next.questions = wrapQuestions;
        tree.root.insideTree.theme.breweryTheme.next.next.next.next.buttons = wrapButton;

}


};










//console.log(tree.current.outsideTree);

module.exports=QuestionTree;
