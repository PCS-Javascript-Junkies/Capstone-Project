


function QuestionTree() {
    this.root = null;
    this.current =null;
}


QuestionTree.prototype.startTree = function(insideOutsideQ, AreaQ){
    function Theme() {
        // this.aaID = "Theme hub Node L3";
        this.chillTheme = null;
        this.nightOutTheme = null;
        this.foodieTheme = null;
        this.hostingTheme = null;
        this.tgifTheme = null;
        this.breweryTheme = null;
        this.kidsTheme = null;
        this.activeTheme = null;
    };

    function Area() {
        this.aaID="Area Node L2";
        this.id= "area";
        this.questions= null;
        this.area= null;
        this.theme= null;
    };

    function RootNode() {
        this.aaID = "Root L1";
        this.id = "Root";
        this.questions = null;
        this.insideTree = null;
        this.outsideTree = null;
    };

    this.root = new RootNode;
    this.current=this.root;
    this.root.insideTree = new Area();
    this.root.insideTree.theme = new Theme();
    this.root.outsideTree= new Area();
    this.root.outsideTree.theme = new Theme();
    };


QuestionTree.prototype.buildTheme = function (inOrOut, id, title){
        function Node(){
            this.aaID = "List Head Node";
            this.id = id;
            this.title = title;
            this.next = null;
        };

        if(inOrOut === "inside"){
            switch(id){
                case "chill":
                    this.root.insideTree.theme.chillTheme = new Node();
                    break;
                case "kids":
                    this.root.insideTree.theme.kidsTheme = new Node();
                    break;
                case "foodie":
                    this.root.insideTree.theme.foodieTheme = new Node();
                    break;
                case "hosting":
                    this.root.insideTree.theme.hostingTheme = new Node();
                    break;
                case "active":
                    this.root.insideTree.theme.activeTheme = new Node();
                    break;
                case "tgif":
                    this.root.insideTree.theme.tgifTheme = new Node();
                    break;
                case "nightOut":
                    this.root.insideTree.theme.nightOutTheme = new Node();
                    break;
                case "brewery":
                    this.root.insideTree.theme.breweryTheme = new Node();
                    break;
                default:
                    console.log("\nTheme was not formatted correctly");

            }
        }
        if(inOrOut === "outside"){
            switch(id){
                case "chill":
                    this.root.outsideTree.theme.chillTheme = new Node();
                    break;
                case "kids":
                    this.root.outsideTree.theme.kidsTheme = new Node();
                    break;
                case "foodie":
                    this.root.outsideTree.theme.foodieTheme = new Node();
                    break;
                case "hosting":
                    this.root.outsideTree.theme.hostingTheme = new Node();
                    break;
                case "active":
                    this.root.outsideTree.theme.activeTheme = new Node();
                    break;
                case "tgif":
                    this.root.outsideTree.theme.tgifTheme = new Node();
                    break;
                case "nightOut":
                    this.root.outsideTree.theme.nightOutTheme = new Node();
                    break;
                case "brewery":
                    this.root.outsideTree.theme.breweryTheme = new Node();
                    break;
                default:
                    console.log("\nTheme was not formatted correctly");

            }
        }
    };

    QuestionTree.prototype.addToTheme = function (inOrOut, theme, title, type, qArray, bObj){
        var pointer;
        function Node() {
            this.aaID= "Added Node";
            this.stories =[];
            this.id = theme;
            this.title= title;
            this.questions= qArray;
            this.buttons= bObj;
            this.next= null;
        };

        if(inOrOut === "inside"){
            switch(theme){
                case "chill":
                   pointer = this.root.insideTree.theme.chillTheme;
                    break;
                case "kids":
                   pointer = this.root.insideTree.theme.kidsTheme;
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
                   console.log("inBrew");
                    break;
                default:
                    console.log("\nTheme was not formatted correctly");

            }
        }
        if(inOrOut === "outside"){
            switch(theme){
                case "chill":
                   pointer = this.root.outsideTree.theme.chillTheme;
                    break;
                case "kids":
                   pointer = this.root.outsideTree.theme.kidsTheme;
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
                   console.log("outBrew");
                    break;
                default:
                    console.log("\nadd was not formatted correctly");
            }
        }
        if(pointer.next === null){
            pointer.next = new Node();
        }else{
            pointer = pointer.next;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next= new Node();
        }
    },

QuestionTree.prototype.initialize = function (){
        tree = new QuestionTree();

        tree.startTree();



        /**
         * General theme building is in this block. This block just adds general themes and questions to
         * each branch of the tree.
         * @type {Array}
         */
        var questions = ["Test Question-1 "," Test Question-2 ", " Test Question-3 ",
         "Test Question-4 ","Test Question-5 "];

        var theme = ["chill","kids","foodie","hosting","active",
                    "tgif","nightOut","brewery"];

        var title = ["Take It Easy","Fun With The Kids","Explore My Inner Foodie","Hosting Guests","Active and Energetic",
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
            level[1], questions);

        tree.addToTheme("outside", theme[i], title[i],
            level[2], questions);

        tree.addToTheme("outside", theme[i], title[i],
            level[1], questions);

        tree.addToTheme("outside", theme[i], title[i],
            level[3], questions);
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



        /**
         * Here is the Generated content block. 
         */

        

         var inBar={
            active: true,
            themeQuestions: [ 
                "Do you feel like beer, wine, or spirits? ",
                "In the mood for hops, grapes, or the hard stuff? ", 
                "If you are at a bar you would order: "
                ],
            themeButtons: [
                {title:"Beer", aaID:"beer", values:["irish_pubs","pubs","breweries","sports_bars"]},
                {title:"Wine", aaID:"wine", values:["wine_bars","champagne_bars","beer_and_wine"]},
                {title:"Mixed Drinks", aaID:"liquor", values:["distilleries","cocktail_bars",
                    "lounges","piano_bars"]},
                {title:"Surprise Me", aaID:"all", values:["irish_pubs","pubs","breweries",
                    "sports_bars","wine_bars", "champagne_bars","beer_and_wine","distilleries",
                "cocktail_bars","lounges","piano_bars"]}
                ],
            breakQuestions: [
                "To take it down a notch you A) listen to music, B) like coffee and tee, C) 'I don't understand the words take a break' ",
                "After a few hours of drinking I feel like food, a quick snack, or more drinking! (responsibly)"
                ],
            breakButtons: [        
                {title:"Music Sounds Nice", aaID:"music", values:["music_venues","piano_bars",
                    "breweries","jazz_and_blues"]},
                {title:"Tea Time", aaID:"coffee", values:["coffee","tea",]},
                {title:"Keep the Party Gong!", aaID:"again", values:["distilleries", "cocktail_bars","lounges","piano_bars"]},
                {title:"Chow Time", aaID:"food", values:["food_trucks","cafes","chicken_wings","desert"]},
                ],
            wrapQuestions: ["Desert, Drinks again, or greasy food?"],

            wrapButtons: [
                {title:"Desert", aaID:"Desert", values:["cupcakes","desserts","donuts"]},
                {title:"Keep the Party Gong!", aaID:"again", values:["irish_pubs","pubs",
                    "breweries","sports_bars", "wine_bars","champagne_bars","beer_and_wine", 
                    "distilleries","cocktail_bars", "lounges","piano bars"]},
                {title:"Chow Time", aaID:"food", values:["food_trucks","cafes","chicken_wings","desert"]},
                ],

            build: function(){
                if(inBar.active === true){
                    tree.root.insideTree.theme.breweryTheme.next.questions = inBar.themeQuestions;
                    tree.root.insideTree.theme.breweryTheme.next.buttons = inBar.themeButtons;
                    tree.root.insideTree.theme.breweryTheme.next.next.questions = inBar.breakQuestions;
                    tree.root.insideTree.theme.breweryTheme.next.next.buttons = inBar.breakButtons;
                    tree.root.insideTree.theme.breweryTheme.next.next.next.questions = inBar.themeQuestions;
                    tree.root.insideTree.theme.breweryTheme.next.next.next.buttons = inBar.themeButtons;
                    tree.root.insideTree.theme.breweryTheme.next.next.next.next.questions = inBar.wrapQuestions;
                    tree.root.insideTree.theme.breweryTheme.next.next.next.next.buttons = inBar.wrapButtons; 
                }
            },

         }


         var outBar={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outBar.active === true){
                    tree.root.outsideTree.theme.breweryTheme.next.questions = outBar.themeQuestions;
                    tree.root.outsideTree.theme.breweryTheme.next.buttons = outBar.themeButtons;
                    tree.root.outsideTree.theme.breweryTheme.next.next.questions = outBar.breakQuestions;
                    tree.root.outsideTree.theme.breweryTheme.next.next.buttons = outBar.breakButtons;
                    tree.root.outsideTree.theme.breweryTheme.next.next.next.questions = outBar.themeQuestions;
                    tree.root.outsideTree.theme.breweryTheme.next.next.next.buttons = outBar.themeButtons;
                    tree.root.outsideTree.theme.breweryTheme.next.next.next.next.questions = outBar.wrapQuestions;
                    tree.root.outsideTree.theme.breweryTheme.next.next.next.next.buttons = outBar.wrapButtons; 
                }
            },

         }


         var inChill={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inChill.active === true){
                    tree.root.insideTree.theme.chillTheme.next.questions = inChill.themeQuestions;
                    tree.root.insideTree.theme.chillTheme.next.buttons = inChill.themeButtons;
                    tree.root.insideTree.theme.chillTheme.next.next.questions = inChill.breakQuestions;
                    tree.root.insideTree.theme.chillTheme.next.next.buttons = inChill.breakButtons;
                    tree.root.insideTree.theme.chillTheme.next.next.next.questions = inChill.themeQuestions;
                    tree.root.insideTree.theme.chillTheme.next.next.next.buttons = inChill.themeButtons;
                    tree.root.insideTree.theme.chillTheme.next.next.next.next.questions = inChill.wrapQuestions;
                    tree.root.insideTree.theme.chillTheme.next.next.next.next.buttons = inChill.wrapButtons; 
                }
            },

         }




        var outChill={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outChill.active === true){
                    tree.root.outsideTree.theme.chillTheme.next.questions = outChill.themeQuestions;
                    tree.root.outsideTree.theme.chillTheme.next.buttons = outChill.themeButtons;
                    tree.root.outsideTree.theme.chillTheme.next.next.questions = outChill.breakQuestions;
                    tree.root.outsideTree.theme.chillTheme.next.next.buttons = outChill.breakButtons;
                    tree.root.outsideTree.theme.chillTheme.next.next.next.questions = outChill.themeQuestions;
                    tree.root.outsideTree.theme.chillTheme.next.next.next.buttons = outChill.themeButtons;
                    tree.root.outsideTree.theme.chillTheme.next.next.next.next.questions = outChill.wrapQuestions;
                    tree.root.outsideTree.theme.chillTheme.next.next.next.next.buttons = outChill.wrapButtons; 
                }
            },

         }






         var inActive={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inActive.active === true){
                    tree.root.insideTree.theme.activeTheme.next.questions = inActive.themeQuestions;
                    tree.root.insideTree.theme.activeTheme.next.buttons = inActive.themeButtons;
                    tree.root.insideTree.theme.activeTheme.next.next.questions = inActive.breakQuestions;
                    tree.root.insideTree.theme.activeTheme.next.next.buttons = inActive.breakButtons;
                    tree.root.insideTree.theme.activeTheme.next.next.next.questions = inActive.themeQuestions;
                    tree.root.insideTree.theme.activeTheme.next.next.next.buttons = inActive.themeButtons;
                    tree.root.insideTree.theme.activeTheme.next.next.next.next.questions = inActive.wrapQuestions;
                    tree.root.insideTree.theme.activeTheme.next.next.next.next.buttons = inActive.wrapButtons; 
                }
            },

         }




        var outActive={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outActive.active === true){
                    tree.root.outsideTree.theme.activeTheme.next.questions = outActive.themeQuestions;
                    tree.root.outsideTree.theme.activeTheme.next.buttons = outActive.themeButtons;
                    tree.root.outsideTree.theme.activeTheme.next.next.questions = outActive.breakQuestions;
                    tree.root.outsideTree.theme.activeTheme.next.next.buttons = outActive.breakButtons;
                    tree.root.outsideTree.theme.activeTheme.next.next.next.questions = outActive.themeQuestions;
                    tree.root.outsideTree.theme.activeTheme.next.next.next.buttons = outActive.themeButtons;
                    tree.root.outsideTree.theme.activeTheme.next.next.next.next.questions = outActive.wrapQuestions;
                    tree.root.outsideTree.theme.activeTheme.next.next.next.next.buttons = outActive.wrapButtons; 
                }
            },

         }





         var inHost={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inHost.active === true){
                    tree.root.insideTree.theme.hostingTheme.next.questions = inHost.themeQuestions;
                    tree.root.insideTree.theme.hostingTheme.next.buttons = inHost.themeButtons;
                    tree.root.insideTree.theme.hostingTheme.next.next.questions = inHost.breakQuestions;
                    tree.root.insideTree.theme.hostingTheme.next.next.buttons = inHost.breakButtons;
                    tree.root.insideTree.theme.hostingTheme.next.next.next.questions = inHost.themeQuestions;
                    tree.root.insideTree.theme.hostingTheme.next.next.next.buttons = inHost.themeButtons;
                    tree.root.insideTree.theme.hostingTheme.next.next.next.next.questions = inHost.wrapQuestions;
                    tree.root.insideTree.theme.hostingTheme.next.next.next.next.buttons = inHost.wrapButtons; 
                }
            },

         }




        var outHost={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outHost.active === true){
                    tree.root.outsideTree.theme.hostingTheme.next.questions = outHost.themeQuestions;
                    tree.root.outsideTree.theme.hostingTheme.next.buttons = outHost.themeButtons;
                    tree.root.outsideTree.theme.hostingTheme.next.next.questions = outHost.breakQuestions;
                    tree.root.outsideTree.theme.hostingTheme.next.next.buttons = outHost.breakButtons;
                    tree.root.outsideTree.theme.hostingTheme.next.next.next.questions = outHost.themeQuestions;
                    tree.root.outsideTree.theme.hostingTheme.next.next.next.buttons = outHost.themeButtons;
                    tree.root.outsideTree.theme.hostingTheme.next.next.next.next.questions = outHost.wrapQuestions;
                    tree.root.outsideTree.theme.hostingTheme.next.next.next.next.buttons = outHost.wrapButtons; 
                }
            },

         }





         var inTGIF={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inTGIF.active === true){
                    tree.root.insideTree.theme.tgifTheme.next.questions = inTGIF.themeQuestions;
                    tree.root.insideTree.theme.tgifTheme.next.buttons = inTGIF.themeButtons;
                    tree.root.insideTree.theme.tgifTheme.next.next.questions = inTGIF.breakQuestions;
                    tree.root.insideTree.theme.tgifTheme.next.next.buttons = inTGIF.breakButtons;
                    tree.root.insideTree.theme.tgifTheme.next.next.next.questions = inTGIF.themeQuestions;
                    tree.root.insideTree.theme.tgifTheme.next.next.next.buttons = inTGIF.themeButtons;
                    tree.root.insideTree.theme.tgifTheme.next.next.next.next.questions = inTGIF.wrapQuestions;
                    tree.root.insideTree.theme.tgifTheme.next.next.next.next.buttons = inTGIF.wrapButtons; 
                }
            },

         }




        var outTGIF={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outTGIF.active === true){
                    tree.root.outsideTree.theme.tgifTheme.next.questions = outTGIF.themeQuestions;
                    tree.root.outsideTree.theme.tgifTheme.next.buttons = outTGIF.themeButtons;
                    tree.root.outsideTree.theme.tgifTheme.next.next.questions = outTGIF.breakQuestions;
                    tree.root.outsideTree.theme.tgifTheme.next.next.buttons = outTGIF.breakButtons;
                    tree.root.outsideTree.theme.tgifTheme.next.next.next.questions = outTGIF.themeQuestions;
                    tree.root.outsideTree.theme.tgifTheme.next.next.next.buttons = outTGIF.themeButtons;
                    tree.root.outsideTree.theme.tgifTheme.next.next.next.next.questions = outTGIF.wrapQuestions;
                    tree.root.outsideTree.theme.tgifTheme.next.next.next.next.buttons = outTGIF.wrapButtons; 
                }
            },

         }





         var inKids={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inKids.active === true){
                    tree.root.insideTree.theme.kidsTheme.next.questions = inKids.themeQuestions;
                    tree.root.insideTree.theme.kidsTheme.next.buttons = inKids.themeButtons;
                    tree.root.insideTree.theme.kidsTheme.next.next.questions = inKids.breakQuestions;
                    tree.root.insideTree.theme.kidsTheme.next.next.buttons = inKids.breakButtons;
                    tree.root.insideTree.theme.kidsTheme.next.next.next.questions = inKids.themeQuestions;
                    tree.root.insideTree.theme.kidsTheme.next.next.next.buttons = inKids.themeButtons;
                    tree.root.insideTree.theme.kidsTheme.next.next.next.next.questions = inKids.wrapQuestions;
                    tree.root.insideTree.theme.kidsTheme.next.next.next.next.buttons = inKids.wrapButtons; 
                }
            },

         }




        var outKids={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outKids.active === true){
                    tree.root.outsideTree.theme.kidsTheme.next.questions = outKids.themeQuestions;
                    tree.root.outsideTree.theme.kidsTheme.next.buttons = outKids.themeButtons;
                    tree.root.outsideTree.theme.kidsTheme.next.next.questions = outKids.breakQuestions;
                    tree.root.outsideTree.theme.kidsTheme.next.next.buttons = outKids.breakButtons;
                    tree.root.outsideTree.theme.kidsTheme.next.next.next.questions = outKids.themeQuestions;
                    tree.root.outsideTree.theme.kidsTheme.next.next.next.buttons = outKids.themeButtons;
                    tree.root.outsideTree.theme.kidsTheme.next.next.next.next.questions = outKids.wrapQuestions;
                    tree.root.outsideTree.theme.kidsTheme.next.next.next.next.buttons = outKids.wrapButtons; 
                }
            },

         }





         var inNightOut={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inNightOut.active === true){
                    tree.root.insideTree.theme.nightOutTheme.next.questions = inNightOut.themeQuestions;
                    tree.root.insideTree.theme.nightOutTheme.next.buttons = inNightOut.themeButtons;
                    tree.root.insideTree.theme.nightOutTheme.next.next.questions = inNightOut.breakQuestions;
                    tree.root.insideTree.theme.nightOutTheme.next.next.buttons = inNightOut.breakButtons;
                    tree.root.insideTree.theme.nightOutTheme.next.next.next.questions = inNightOut.themeQuestions;
                    tree.root.insideTree.theme.nightOutTheme.next.next.next.buttons = inNightOut.themeButtons;
                    tree.root.insideTree.theme.nightOutTheme.next.next.next.next.questions = inNightOut.wrapQuestions;
                    tree.root.insideTree.theme.nightOutTheme.next.next.next.next.buttons = inNightOut.wrapButtons; 
                }
            },

         }




        var outNightOut={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outNightOut.active === true){
                    tree.root.outsideTree.theme.nightOutTheme.next.questions = outNightOut.themeQuestions;
                    tree.root.outsideTree.theme.nightOutTheme.next.buttons = outNightOut.themeButtons;
                    tree.root.outsideTree.theme.nightOutTheme.next.next.questions = outNightOut.breakQuestions;
                    tree.root.outsideTree.theme.nightOutTheme.next.next.buttons = outNightOut.breakButtons;
                    tree.root.outsideTree.theme.nightOutTheme.next.next.next.questions = outNightOut.themeQuestions;
                    tree.root.outsideTree.theme.nightOutTheme.next.next.next.buttons = outNightOut.themeButtons;
                    tree.root.outsideTree.theme.nightOutTheme.next.next.next.next.questions = outNightOut.wrapQuestions;
                    tree.root.outsideTree.theme.nightOutTheme.next.next.next.next.buttons = outNightOut.wrapButtons; 
                }
            },

         }





         var inFood={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(inFood.active === true){
                    tree.root.insideTree.theme.foodieTheme.next.questions = inFood.themeQuestions;
                    tree.root.insideTree.theme.foodieTheme.next.buttons = inFood.themeButtons;
                    tree.root.insideTree.theme.foodieTheme.next.next.questions = inFood.breakQuestions;
                    tree.root.insideTree.theme.foodieTheme.next.next.buttons = inFood.breakButtons;
                    tree.root.insideTree.theme.foodieTheme.next.next.next.questions = inFood.themeQuestions;
                    tree.root.insideTree.theme.foodieTheme.next.next.next.buttons = inFood.themeButtons;
                    tree.root.insideTree.theme.foodieTheme.next.next.next.next.questions = inFood.wrapQuestions;
                    tree.root.insideTree.theme.foodieTheme.next.next.next.next.buttons = inFood.wrapButtons; 
                }
            },

         }




        var outFood={
            active: false,  //make true when done
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [ 
                "", 
                "", 
                ""  
                ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms. 
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            breakQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [        
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "",
                ""
                ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]},
                {title:"", aaID:"", values:["","",""]}
                ],

            build: function(){
                if(outFood.active === true){
                    tree.root.outsideTree.theme.foodieTheme.next.questions = outFood.themeQuestions;
                    tree.root.outsideTree.theme.foodieTheme.next.buttons = outFood.themeButtons;
                    tree.root.outsideTree.theme.foodieTheme.next.next.questions = outFood.breakQuestions;
                    tree.root.outsideTree.theme.foodieTheme.next.next.buttons = outFood.breakButtons;
                    tree.root.outsideTree.theme.foodieTheme.next.next.next.questions = outFood.themeQuestions;
                    tree.root.outsideTree.theme.foodieTheme.next.next.next.buttons = outFood.themeButtons;
                    tree.root.outsideTree.theme.foodieTheme.next.next.next.next.questions = outFood.wrapQuestions;
                    tree.root.outsideTree.theme.foodieTheme.next.next.next.next.buttons = outFood.wrapButtons; 
                }
            },

         }




         

        /*Content build Block*/

        inBar.build();
        outBar.build();
        inChill.build();
        outChill.build();
        inActive.build();
        outActive.build();
        inTGIF.build();
        outTGIF.build();
        inHost.build();
        outHost.build();
        inNightOut.build();
        outNightOut.build();
        inKids.build();
        outKids.build();
        inFood.build();
        outFood.build();

    },















//console.log(tree.current.outsideTree);

module.exports=QuestionTree;
