


function QuestionTree() {
    this.root = null;
    this.current =null;
}


QuestionTree.prototype.startTree = function(insideOutsideQ, AreaQ){
    function Theme() {
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
            this.stories =[];
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


        for(i =0; i< 8; ++i){
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
            themeStories: [
                ["Ah, I see your are up for a little tour some of the finer things Portland has to offer...our local bars, wineries and breweries",
                "well we can't think of a better place to get started than ",
                "They come highly recommended, then as you wonder through the city might, we suggest that you also stop at","",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers we can tell ",
                "is going to be the perfect place for you to end your adventure! "],
               ["If there is one thing Portland is known for, its good beer and wine! well... at least it should be.",
                "Our magical computer elves have tallied your results, and think that  ",
                " would be a great place to start!"," Then of course no sophisticated dirking tour would be complete without the wonders of ",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers the computer elves have decided that ",
                "is going to be the perfect place for you to end your adventure! "],
               // ["","","","","","","","",""]
            ],
            themeQuestions: [
                "Alright! Do you feel like beer, wine, or cocktails? ",
                "On your adventure are you going to be in the mood for hops, grapes, or the hard stuff? ",
                "Pop quiz hotshot!... Your at a restaurant, the waiter comes up before you had a chance to look at the menu what do you order? "
            ],
            themeButtons: [
                {title:"Beer", aaID:"beer", values:["irish_pubs","pubs","breweries","sports_bars", "good_bars", "omsi_after_dark"]},
                {title:"Wine", aaID:"wine", values:["wine_bars","champagne_bars","beer_and_wine", "winery"]},
                {title:"Mixed Drinks", aaID:"liquor", values:["distilleries","cocktail_bars",
                    "lounges","piano_bars","martini_bars"]},
                {title:"Surprise Me", aaID:"all", values:["the_best_irish_pubs","pubs","breweries",
                    "sports_bars","wine_bars", "champagne_bars","beer_and_wine","distilleries",
                "cocktail_bars","lounges","piano_bars","martini_bars"]}
            ],
            breakQuestions: [
                "Lets plan a little break shall we? What sounds nice to you? Music, Tea/Coffee, Food, or Keep the party going!?",
                "To take it down a notch you: A) listen to music, B) drink coffee or tee, C) 'I don't understand the words take a break!!!' ",
                "After a few hours of drinking do you often  feel like a full meal, a quick snack, or more drinking!? (responsibly)"
            ],
            breakButtons: [
                {title:"Music Sounds Nice", aaID:"music", values:["music_venues","piano_bars",
                    ,"jazz_and_blues", "live_music"]},
                {title:"Tea Time", aaID:"coffee / tea", values:["coffee","tea","bubble_tea"]},
                {title:"Keep the Party Going!", aaID:"again", values:["nice_bars","top_bars", "cocktail_bars","breweries","wineries", ""]},
                {title:"Chow Time", aaID:"food", values:["food_trucks","cafes","grill","bar_food", "food_pod"]},
            ],
            wrapQuestions: ["Deesserts, Drinks agains, or greasy food?",
            "Sadly all good things have to come to an end... but what do we want to end it with?",
            "Whew, your going to be tired! how should we end the night?",],

            wrapButtons: [
                {title:"Desert", aaID:"Desert", values:["cupcakes","desserts","donuts","desert_cart", "waffle_window"]},
                {title:"Grab One Last Drink", aaID:"again", values:["irish_pubs","pubs",
                    "breweries","sports_bars", "wine_bars","champagne_bars","beer_and_wine",
                    "distilleries","cocktail_bars", "lounges","piano bars"]},
                {title:"Chow Time", aaID:"food", values:["food_trucks","cafes","chicken_wings","desert", "pizza", "pub_food"]},
            ],

            build: function(){
                if(inBar.active === true){
                    tree.root.insideTree.theme.breweryTheme.stories = inBar.themeStories;
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

         };


         var outBar={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["Ah, I see your are up for a little tour some of the finer things Portland has to offer...our local bars, wineries and breweries",
                "But its such a nice day outside! what to do!? Well we can't think of a better place to get started than ",
                "They come highly recommended, then as you wonder through the city might, we suggest that you also stop at","",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers we can tell ",
                "is going to be the perfect place for you to end your adventure! "],
               ["If there is one thing Portland is known for, its good beer, wine, and great weather! well... at last the first two.",
                "Our magical computer elves have tallied your results, and think that  ",
                " would be a great place to start!"," Then of course no sophisticated dirking tour would be complete without the wonders of ",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers the computer elves have decided that ",
                "is going to be the perfect place for you to end your adventure! "],
              //  ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Ah, such a great day right!? Well how do you want to spend it? sipping some wine, tasting some great beer?",
                "What kind of establishments would you like to tour on this fine fine eventing?",
                "If you could pick one type of alcohol to spend the evening trying it would be..."
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Beer", aaID:"beer", values:["pubs","breweries", "good_bars", "lots_of_beer", "outside_bars", "bars_with_outdoor_seating"]},
                {title:"Wine", aaID:"wine", values:["wine_bars","champagne_bars","beer_and_wine", "winery"]},
                {title:"Mixed Drinks", aaID:"liquor", values:["distilleries","cocktail_bars",
                    "lounges","piano_bars","martini_bars"]},
                {title:"Surprise Me", aaID:"all", values:["the_best_irish_pubs","breweries",
                    "sports_bars","wine_bars", "champagne_bars","beer_and_wine","distilleries",
                "cocktail_bars","lounges","piano_bars","martini_bars"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "When its time to take a break on our little tour, what sounds nice?",
                "OK, we are generating your adventure, but we think you will need a little break. On your tour, what kind of things would like to do to take it down a notch?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Music Sounds Nice", aaID:"music", values:["music_venues","piano_bars",
                    ,"jazz_and_blues", "live_music"]},
                {title:"Tea & Coffee Please", aaID:"coffee / tea", values:["coffee","tea","bubble_tea"]},
                {title:"No Breaks for Me!", aaID:"again", values:["nice_bars","top_bars", "cocktail_bars","breweries","wineries", ""]},
                {title:"Chow Time", aaID:"food", values:["food_trucks","cafes","grill","bar_food", "food_pod"]},
            ],
            //Add strings for the displayed questions
            wrapQuestions: ["Desert, Drinks again, or greasy food?",
            "Sadly all good things have to come to an end... but what do we want to end it with?",
            "Whew, your going to be tired! Now how should we end the night?",],

            wrapButtons: [
                {title:"Desert", aaID:"Desert", values:["cupcakes","desserts","donuts","desert_cart", "waffle_window"]},
                {title:"Grab One Last Drink", aaID:"again", values:["irish_pubs","pubs",
                    "breweries","bars_with_outdoor_seating", "wine_bars","champagne_bars","beer_and_wine",
                    "distilleries","cocktail_bars", "lounges","piano bars"]},
                {title:"Chow Time", aaID:"food", values:["food_trucks", "chicken_wings","desert", "pizza", "pub_food", "food_outdoor_seating"]},
            ],

            build: function(){
                if(outBar.active === true){
                    tree.root.outsideTree.theme.breweryTheme.stories = outBar.themeStories;
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

         };


         var inChill={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["Yes today is the kinda of day where you should take it easy, keep it low key. Not to worry Portland has what you need.",
                "If your going for a relaxing day, but staying home on that couch isn't an option, we recommend ",
                " to start off with.","",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers we can tell ",
                "is going to be the perfect place for you to end your adventure! "],
                ["Yes today is the kinda of day where you should take it easy, keep it low key. Not to worry Portland has what you need.",
                "If your going for a relaxing day, but staying home on that couch isn't an option, we recommend ",
                " to start off with.","",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers we can tell ",
                "is going to be the perfect place for you to end your adventure! "],
                                // ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Music, Food, Art, or roll the dice for something out of the ordinary?",
                "something relaxing... hmmmm.... how about Music, Food, or Art?",
                "So much to see and do in Portland, Are you into coffee? Music, coffee and music? how about some food!? you pick!"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Music & Coffee", aaID:"coffe_music", values:["music_&_coffe","juniper_hotel","coffe_with_music","rimsky_korsakoffee_coffee_house"]},
                {title:"Pool Bowling, Etc", aaID:"pool", values:["best_pool_halls","best_bowling_ally","bowling_and_pool","card_room"]},
                {title:"Random but Still Awesome Ideas", aaID:"random", values:["guardian_games","wine_tasting","Japanese_guarden", "saturday_market", "bowling","shopping_mall"]},
                {title:"Art & The Like", aaID:"", values:["art_museum","mission_theature","Arts_&_Entertainment", "Art_Galleries"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "For the next stop, Food, Music, or Drinks?",
                "Somewhere along the way you will want a break, what sounds nice? Food, Music, or Drinks?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Chill Food Places", aaID:"food", values:["relaxing_dinner_places","pied_cow","relaxing_lunch"]},
                {title:"Chill Bars", aaID:"chill_bar", values:["relaxing_bar","chill_bar","bar_with_atmospher"]},
                {title:"Music Venues", aaID:"music", values:["jazz_and_blues","live_music_bar","live_music","live_music_bar"]},
                {title:"Something Random", aaID:"random", values:["omsi_after_dark","pool_hall","bowling","guardian_games","trendy_hip_resturants"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How would you like to end your evening?",
                "Its time to bring our day to the a close, how should we end it?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Coffee or Tea", aaID:"coffee/tea", values:["coffee_tea","papa_haydens","rimsky_korsakoffee_coffee_house","bubble_tea"]},
                {title:"Desert", aaID:"Desert", values:["papa_haydens","pied_cow","desert","fondue","gelato"]},
                {title:"Drinks", aaID:"Drinks", values:["relaxing_bars","chill_bars","portland_city_grill","live_music_bar"]},
                {title:"Food", aaID:"food", values:["relaxing_dinner_places","food_cards","comfort_food"]}
            ],

            build: function(){
                if(inChill.active === true){
                    tree.root.insideTree.theme.chillTheme.stories = inChill.themeStories;
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

         };




        var outChill={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["Yes today is the kinda of day where you should take it easy, keep it low key. Not to worry Portland has what you need.",
                "If your going for a relaxing day, but staying home on that couch isn't an option, we recommend ",
                " to start off with.","",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers we can tell ",
                "is going to be the perfect place for you to end your adventure! "],
                ["Yes today is the kinda of day where you should take it easy, keep it low key. Not to worry Portland has what you need.",
                "If your going for a relaxing day, but staying home on that couch isn't an option, we recommend ",
                " to start off with.","",
                ". Looking good so far if we do say so ourselves! it can only get better by adding ","",
                "to our little adventure. ","Then its back at it! and through your answers we can tell ",
                "is going to be the perfect place for you to end your adventure! "],
                // ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Where should we stop on our day off?",
                "On a relaxing day like this, how should we spend it?",
                "Parks, Walking Outside, Games, Or Hanging By the Water?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Parks", aaID:"parks", values:["city_parks","portland_park","rose_garden","Japanese_guarden"]},
                {title:"Relaxing Walks", aaID:"walks", values:["walking_paths","hiking_trails","walking_trails","waterfront_park"]},
                {title:"Chill Outdoor Games", aaID:"outdoor_games", values:["frisbee_golf","mini_golf","golf","tennis"]},
                {title:"Relaxing By The Water", aaID:"water_relaxing", values:["water_fountains","pools","water_park"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "For the next stop, Food, Music, or Drinks?",
                "Somewhere along the way you will want a break, what sounds nice? Food, Music, or Drinks?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Chill Food Places", aaID:"food", values:["relaxing_dinner_places","pied_cow","relaxing_lunch"]},
                {title:"Chill Bars", aaID:"chill_bar", values:["relaxing_bar","chill_bar","bar_with_atmospher"]},
                {title:"Music Venues", aaID:"music", values:["jazz_and_blues","live_music_bar","live_music","live_music_bar"]},
                {title:"Something Random", aaID:"random", values:["omsi_after_dark","pool_hall","bowling","guardian_games","trendy_hip_resturants"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How would you like to end your evening?",
                "Its time to bring our day to the a close, how should we end it?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Coffee or Tea", aaID:"coffee/tea", values:["coffee_tea","papa_haydens","rimsky_korsakoffee_coffee_house","bubble_tea"]},
                {title:"Desert", aaID:"Desert", values:["papa_haydens","pied_cow","desert","fondue","gelato"]},
                {title:"Drinks", aaID:"Drinks", values:["relaxing_bars","chill_bars","portland_city_grill","live_music_bar"]},
                {title:"Food", aaID:"food", values:["relaxing_dinner_places","food_cards","comfort_food"]}
            ],

            build: function(){
                if(outChill.active === true){
                    tree.root.outsideTree.theme.chillTheme.stories = outChill.themeStories;
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

         };






         var inActive={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["So you feel like doing something but you don't want to go outside - never fear, there are many adventures for the likes of you!","Perhaps it's raining. Or maybe it (gasp!) seems like it might be getting ready to start seeming like it might be ready to seem like it might almost feel like...snow. Or sleet, and all that. Either way, you'll be dry at the","Right?","Next on the adventure is","...but before you head over there, you decide to run a quick errand at the closest Plaid Pantry. You strike up a conversation with a woman in line who tells you about her home, which is a houseboat. Fascinated, you vow to move to a houseboat next chance you get.","At this point, you're hungry, so you go to",". Satisfied, you scurry to your car (or if public transport is handy, you take that), and depart for ",", where you talk to at least three new strangers. (You ask them about their pets - always a neutral place to start). It is just what the doctor ordered.","As the adventure and your evening conclude, you head back home, mentally decorating your houseboat."]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Do you like games? (Not a trick question)",
                "Do you hate games? (Trick question)"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"I love games!", aaID:"games_love", values:["guardian_games","table_top_games"]},
                {title:"I hate games!", aaID:"games_hate", values:["firing_range","swimming_pools",""]},
                {title:"I prefer cats", aaID:"games_cats", values:["pool_and_billiards"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "Hungry yet?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Starving! And adventerous.", aaID:"starving_adventerous", values:[["ethiopian","pambiche","thai", "greek"]]},
                {title:"Hungry and looking for local favorites", aaID:"local_food", values:["best_local_food"]},
                {title:"Yes, but nothing too crazy", aaID:"white_bread_apetite", values:["local_buger","best_pizza","bistro"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "If the appocalypse happened right now, are you packed and ready?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Yes - I was born ready", aaID:"born_ready", values:["lazar_tag","paint_ball"]},
                {title:"No. The world will end in 5 billion years when the sun becomes a red giant", aaID:"geek_ready", values:["arcade", "geek_trivia", "video_games"]},
                {title:"Actually, the sun will end as a white dwarf. And I'm ready!", aaID:"white_dwarf", values:["arcade", "geek_trivia", "video_games"]}
            ],

            build: function(){
                if(inActive.active === true){
                    tree.root.insideTree.theme.activeTheme.stories = inActive.themeStories;
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

         };




        var outActive={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
              ["So you feel like doing something outside - and Portland was made for the likes of you!","The sun is shining (there's a 30% chance of that); or perhaps it's not (if this were a bet, you'd put your money on the latter)... but you don't care! You know that in the Rose City, a little incliment weather doesn't stop anyone from doing anything. So start here: ","As good a place as any. Better, in fact. ","Next on the adventure is","...but before you head over there, you decide to run a quick errand at the closest Space Age gas station (really - how can you not?). You strike up a conversation with a man in line who tells you about his home, which is a houseboat. Fascinated, you vow to move to a houseboat next chance you get.","You're hungry - starving, in face, so your next stop is ",". You take a walk around the block and take your legs, or a bike if you have one, or public transport if you have neither legs nor bike, and depart for ",", where you talk to at least sixteen new strangers. (You ask them about their favorite book, because you're smart). It is just what the doctor ordered.","As the adventure and your evening conclude, you stroll back home, mentally decorating your houseboat."],
            ["So you feel like doing something outside - and Portland was made for the likes of you!","The sun is shining (there's a 30% chance of that); or perhaps it's not (if this were a bet, you'd put your money on the latter)... but you don't care! You know that in the Rose City, a little incliment weather doesn't stop anyone from doing anything. So start here: ","As good a place as any. Better, in fact. ","Next on the adventure is","...but before you head over there, you decide to run a quick errand at the closest Space Age gas station (really - how can you not?). You strike up a conversation with a man in line who tells you about his home, which is a houseboat. Fascinated, you vow to move to a houseboat next chance you get.","You're hungry - starving, in face, so your next stop is ",". You take a walk around the block and take your legs, or a bike if you have one, or public transport if you have neither legs nor bike, and depart for ",", where you talk to at least sixteen new strangers. (You ask them about their favorite book, because you're smart). It is just what the doctor ordered.","As the adventure and your evening conclude, you stroll back home, mentally decorating your houseboat."]

            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Do you like games? (Not a trick question)",
                "Do you hate games? (Trick question)"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"I love games!", aaID:"games_love", values:["guardian_games","table_top_games"]},
                {title:"I hate games!", aaID:"games_hate", values:["firing_range","swimming_pools",""]},
                {title:"I prefer cats", aaID:"games_cats", values:["pool_and_billiards"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "Hungry yet?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Starving! And adventurous.", aaID:"starving_adventerous", values:[["ethiopian","pambiche","thai", "greek"]]},
                {title:"Hungry and looking for local favorites", aaID:"local_food", values:["best_local_food"]},
                {title:"Yes, but nothing too crazy", aaID:"white_bread_apetite", values:["local_buger","best_pizza","bistro"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "If the appocalypse happened right now, are you packed and ready?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Yes - I was born ready", aaID:"born_ready", values:["lazar_tag","paint_ball"]},
                {title:"No. The world will end in 5 billion years when the sun becomes a red giant", aaID:"geek_ready", values:["arcade", "geek_trivia", "video_games"]},
                {title:"Actually, the sun will end as a white dwarf. But yes, I'm ready", aaID:"white_dwarf", values:["arcade", "geek_trivia", "video_games"]}
            ],

            build: function(){
                if(outActive.active === true){
                    tree.root.outsideTree.theme.activeTheme.stories = outActive.themeStories;
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

         };





         var inHost={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["So your out of town friends or family finally decided to come for a visit, and the pressure is on to show them around. Whether or not this sounds like a good time to you, it's necessary to demonstrate that your choice of abodes is a wise one. What to do?","You've decided to stay indoors, but you didn't specify which 'indoors' you want. So start here:","Now you should be feeling Portland-y, very, very Portland-y.","You are so Portland-y, you've decided to all wear kilts. Go - don your best kilt. Who cares what folks say? Go ahead - you won't get chilly, you're staying inside anyway.","Okay, next up: somthing to eat!","With so many great restaurants, known and unknown (and known-known and unknown-unknown), how’s a good host to know what to choose? How about this: ","Scrumptious, right? In Portland, we say 'scrumpt': Like, 'That was so delish and scrumpt.' (Actually, not. Don't say that. Don't ever say that.)" ,"How are you feeling? Good enough to swim the river? Not right now? Okay, well how about going to", "instead? Now go to bed. It's late!"],
                ["So your out of town friends or family finally decided to come for a visit, and the pressure is on to show them around. Whether or not this sounds like a good time to you, it's necessary to demonstrate that your choice of abodes is a wise one. What to do?","You've decided to stay indoors, but you didn't specify which 'indoors' you want. So start here:","Now you should be feeling Portland-y, very, very Portland-y.","You are so Portland-y, you've decided to all wear kilts. Go - don your best kilt. Who cares what folks say? Go ahead - you won't get chilly, you're staying inside anyway.","Okay, next up: somthing to eat!","With so many great restaurants, known and unknown (and known-known and unknown-unknown), how’s a good host to know what to choose? How about this: ","Scrumptious, right? In Portland, we say 'scrumpt': Like, 'That was so delish and scrumpt.' (Actually, not. Don't say that. Don't ever say that.)" ,"How are you feeling? Good enough to swim the river? Not right now? Okay, well how about going to", "instead? Now go to bed. It's late!"]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Do you want to start slow?",
                "Art. Do you heart art?" ,
                "Does the smell of paper and ink inspire?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"We may or may not have been called bookworms at some point in our lives", aaID:"bookworm", values:["library","bookstore"]},
                {title:"That's why we're here", aaID:"cultured", values:["library","museum","art", "historical_society"]},
                {title:"Nothing too quiet, seriously", aaID:"move_little", values:["Avalon", "firing_range", "kennedy_school", "hot_tub"]},
                {title:"Not right now. We need to move!", aaID:"move_much", values:["shanghi_tunnels", "climbing_wall","arcade","paint_ball", "swimming_pools"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "Are you guys hungry?",
                "All that movement, all that culture - Are you hungry?",
                "Are you in the mood for food?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"We are indeed hungry - and and adventurous", aaID:"adventurous_eater", values:["ethiopian","thai", "greek"]},
                {title:"The ocean is not that far - seafood sounds just right", aaID:"seafood", values:["mccormic_and_schmick","southpark", "jake's", "seafood"]},
                {title:"We want to eat somewhere infamous", aaID:"infamous", values:["montage","voodoo_donuts","unusual_food", "dan_and_louise_oyster_bar", "old_spagetti_factory", "hedge_house"]},
                {title:"We don't all get together very often - we'd like to class it up", aaID:"classy", values:["andina", "jake's", "portland_city_grill","italian", "bistro", "le_pigeon", "upscale_restaurant"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How OUT do you want to go?",
                "The night is young, grasshoppers! What else is on your agenda?",
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"My friends are hip and we want to go out", aaID:"hipster", values:["ground_kontrol","ron_tons", "karaoke_bars", "mississippi_studios", "radio_room", "produce_row", "hipster_bars"]},
                {title:"We'd like to settle in somewhere quiet", aaID:"quiet", values:["cinema","wine_bar","pub"]},
                {title:"How about some music?", aaID:"music", values:["laurelthirst","mississippi_studios","crystal_ballroom", "doug_fir", "wonder_ballroom", "open_mic_venue"]},
                {title:"Most strip clubs per capita: Is this true?", aaID:"strip_clubs", values:["best_strip_club"]}
            ],

            build: function(){
                if(inHost.active === true){
                    tree.root.insideTree.theme.hostingTheme.stories = inHost.themeStories;
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

         };




        var outHost={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["So your out of town friends or family finally decided to come for a visit, and you want to show them around! A worthy quest. It's beautiful, no? You step outside, wondering where to start. ","You (all of you, collectively... and also, you're all oddly, collectively, humming Dandy Warhols songs) depart for:","Now you should be feeling Portland-y, very, very Portland-y.","You are so Portland-y, in fact, that you've ditched pants. Did you know public nudity is totally legal? It's an oft-quoted - but somewhat less frequently implimented - statute. Anyway.","Surely your collective unconcious must be telling you how hungry you all are, after that. So you don your suit or your skinny tie... or you remain in the clothes you're in but are sure to tie your shoes, and head out to ","You're saited? Good. You're a juggernaut. You're fabulous. You're a modern-day Captain James Cook. You're going to ","As former mayor Vera Katz is fond of saying, 'Citizens are the riches of a city. For what remains of the evening, you stroll down to the Eastbank Esplanade and meet at least one new friend."],
                ["So your out of town friends or family finally decided to come for a visit, and you want to show them around! A worthy quest. It's beautiful, no? You step outside, wondering where to start. ","You (all of you, collectively... and also, you're all oddly, collectively, humming Dandy Warhols songs) depart for:","Now you should be feeling Portland-y, very, very Portland-y.","You are so Portland-y, in fact, that you've ditched pants. Did you know public nudity is totally legal? It's an oft-quoted - but somewhat less frequently implimented - statute. Anyway.","Surely your collective unconcious must be telling you how hungry you all are, after that. So you don your suit or your skinny tie... or you remain in the clothes you're in but are sure to tie your shoes, and head out to ","You're saited? Good. You're a juggernaut. You're fabulous. You're a modern-day Captain James Cook. You're going to ","As former mayor Vera Katz is fond of saying, 'Citizens are the riches of a city. For what remains of the evening, you stroll down to the Eastbank Esplanade and meet at least one new friend."]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "So you want to get out. How out is out?",
                "Art. Do you heart art?" ,
                "How does biking sound?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"We'd rather hit a trail, but we don't want to drive too far", aaID:"city_hike", values:["forest_park", "trail", "rocky_butte", "city_hikes"]},
                {title:"That's why we're here", aaID:"culture", values:["oregon_zoo", "first_thursday", "garden","chinese_garden", "gardens", "rose_garden", "trail"]},
                {title:"Biking is our speed!", aaID:"bike", values:["bike_rentals"]},
                {title:"Results of exploration by definition must be unexpected. Surprise us!", aaID:"surprise", values:["shanghi_tunnels", "rocky_butte", "saturday_market", "arcade","paint_ball", "ultimate_frisbee", "outdoor_swimming_pools"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "Something to eat, Adventurers?",
                "In the mood for food?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"We are indeed hungry - and and adventerous", aaID:"adventurous_eater", values:["ethiopian", "pok_pok", "pambiche","thai", "greek", "food_cart", "food_pod"]},
                {title:"The ocean is not that far - seafood sounds just right", aaID:"seafood", values:["mccormic_and_schmick", "salty's_on_the_columbia", "southpark", "iorio", "jake's", "dan_and_louise_oyster_bar","seafood"]},
                {title:"We want to eat somewhere infamous", aaID:"infamous", values:["montage","voodoo_donuts", "pok_pok", "unusual_food", "dan_and_louise_oyster_bar", "old_spagetti_factory", "hedge_house", "food_cart", "food_pod"]},
                {title:"We don't all get together very often - we'd like to class it up", aaID:"classy", values:["andina", "jake's", "portland_city_grill", "southpark", "italian", "bistro", "le_pigeon", "fancy_restaurant"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "What is your quest?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"To find the holy grail", aaID:"holy_grail", values:["kennedy_school","crystal_ballroom","powell's_bookstore"]},
                {title:"Hipster heaven. Lead us there.", aaID:"hipster", values:["ground_kontrol", "bonfire", "ron_tons","mississippi_studios", "dig_a_pony", "radio_room", "produce_row", "hipster_bars"]},
                {title:"Zen drinks, then nirvana", aaID:"quiet", values:["jade_lounge","wine_bar","jazz", "mcmenamins", "movie_madness", "coffee_shop_open_late"]},
                {title:"...hold on: most strip clubs per capita. Is this true?", aaID:"strip_clubs", values:["mary's_strip_club","devil's_point","acropolis_strip", "best_strip_club", "sassy's_strip", "magic_gardens", "union_jack's"]}
            ],

            build: function(){
                if(outHost.active === true){
                    tree.root.outsideTree.theme.breweryTheme.stories = outHost.themeStories;
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

         };





         var inTGIF={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["TGIF! YES FINALLY ITS FRIDAY NIGHT! Work is over, you just got paid (or at least if feels like it) and it Time to celibate!","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                ["TGIF! YES FINALLY ITS FRIDAY NIGHT! Work is over, you just got paid (or at least if feels like it) and it Time to celibate!","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                // ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Its finally Friday! how should we celibate?",
                "where should we go?",
                "Its the weekend, where should we go?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Dancing", aaID:"Dancing", values:["Night_club","Splash","Dance_club","Dancing"]},
                {title:"Drinks", aaID:"Drinks", values:["martini_bars","wine_bar","the_best_irish_pubs","best_bar"]},
                {title:"Games & More", aaID:"Games", values:["guardian_games","mini_golf","arcade","avalon","pool_hall"]},
                {title:"Music", aaID:"msuic", values:["juniper_hotel","live_music","music_venues"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "When its time to take a break, what should we do?",
                "Ok, time to take a break, what sounds like your cup of tea?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Break, No Breaks!", aaID:"no_breaks", values:["music_venues","best_bars","dance_clubs","martini_bars"]},
                {title:"Food Time!", aaID:"food", values:["food_pod","food_carts","fondue","good_bar_food"]},
                {title:"Music Break", aaID:"music", values:["live_music","coffee_with_music","blues_and_jazz"]},
                // {title:"", aaID:"", values:["","",""]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How should we end our night?",
                "Time to decide how to wrap up the evening, what are your thinking?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Desert!", aaID:"desert", values:["Desert","gelato","pied_cow","papa_haydens","great_desert"]},
                {title:"Coffee or Tea", aaID:"coffee&tea", values:["coffee_house","late_night_coffee","late_night_tea","pied_cow"]},
                {title:"One Final Drink", aaID:"drinks", values:["calm_bar","portland_city_grill","martini_bars","cocktail_bars"]},
                {title:"FOOOOOOOOOOD", aaID:"foooood", values:["food_pod","voodoo_donuts","waffle_window","late_night_food","bar_food"]}
            ],

            build: function(){
                if(inTGIF.active === true){
                    tree.root.insideTree.theme.tgifTheme.stories = inTGIF.themeStories;
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

         };




        var outTGIF={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["TGIF! YES FINALLY ITS FRIDAY NIGHT! Work is over, you just got paid (or at least if feels like it) and it Time to celibate!","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                ["TGIF! YES FINALLY ITS FRIDAY NIGHT! Work is over, you just got paid (or at least if feels like it) and it Time to celibate!","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                // ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Its finally Friday! how should we celibate?",
                "where should we go?",
                "Its the weekend, where should we go?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Dancing", aaID:"Dancing", values:["Night_club","Splash","Dance_club","Dancing"]},
                {title:"Drinks", aaID:"Drinks", values:["martini_bars","wine_bar","the_best_irish_pubs","best_bar"]},
                {title:"Games & More", aaID:"Games", values:["guardian_games","mini_golf","arcade","avalon","pool_hall"]},
                {title:"Music", aaID:"msuic", values:["juniper_hotel","live_music","music_venues"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "When its time to take a break, what should we do?",
                "Ok, time to take a break, what sounds like your cup of tea?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Break, No Breaks!", aaID:"no_breaks", values:["music_venues","best_bars","dance_clubs","martini_bars"]},
                {title:"Food Time!", aaID:"food", values:["food_pod","food_carts","fondue","good_bar_food"]},
                {title:"Music Break", aaID:"music", values:["live_music","coffee_with_music","blues_and_jazz"]},
                // {title:"", aaID:"", values:["","",""]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How should we end our night?",
                "Time to decide how to wrap up the evening, what are your thinking?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Desert!", aaID:"desert", values:["Desert","gelato","pied_cow","papa_haydens","great_desert"]},
                {title:"Coffee or Tea", aaID:"coffee&tea", values:["coffee_house","late_night_coffee","late_night_tea","pied_cow"]},
                {title:"One Final Drink", aaID:"drinks", values:["calm_bar","portland_city_grill","martini_bars","cocktail_bars"]},
                {title:"FOOOOOOOOOOD", aaID:"foooood", values:["food_pod","voodoo_donuts","waffle_window","late_night_food","bar_food"]}
            ],

            build: function(){
                if(outTGIF.active === true){
                    tree.root.outsideTree.theme.tgifTheme.stories = outTGIF.themeStories;
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

         };





         var inKids={
            active: false,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["Maybe you’re out with your mom or dad. Sometimes you have to do errands, to the bank, to the post office, or to the grocery store, the most boring trip of all time. You will have to do all those things—but not today! Do you like adventure? Mystery? Surprise? Well, here’s one for you:","—start the adventure here! (Are you surprised?)","Are you the kind of kid who likes to do the same thing as your friends, or do you like to do your own thing? Probably a little bit of both, right? Like if everyone colors their hair with red Kool-Aid, you color yours, too—but blue instead of red. The next part of your adventure takes you to the ","—the best of both worlds.","Okay, now you’re off to the ",". If you’re happy about that, do a handstand. If you’re super excited, do a cartwheel. If you’re beyond excited right now, climb the nearest tree and sing (do not forget to sing! If you know the theme song from Adventure Time, sing that. Otherwise, your choice.). And when your mom or dad asks what you’re doing, tell them you’re just expressing yourself. (Just like that guy who’s painted completely silver, at the Saturday Market on the weekends. He’s expressing himself, too. …No, do not go paint yourself silver right now.)","","is the last part of your palenguitine adventure today! (“Palenguitine” means “awesome,” but it’s not a real word. It was made up just now.) When you’re done at ",",  on your way home, make up your own description of the adventure that no one will ever understand but you (and your brother or sister if you have one with you). Now say the description in Pig Latin. (Hint: pig = sweet = weet-say, and palenguitine = alenguitine-pay.) And have a zeitharunt day tomorrow!"],
                ["","","","","","","","",""],
                ["","","","","","","","",""]
            ],
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
                    tree.root.insideTree.theme.kidsTheme.stories = inKids.themeStories;
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

         };




        var outKids={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["There is a time and a place for everything, or so parents seem fond of saying, but today is not the day for homework, chores, or writing thank you notes. Today is for fun, kid-style!",
                "Is that a spider, or just a dried leaf? A little blue flower or a Smurf? If you’re around Hawthorne, look for those little horses tied up along the curb. As you start your adventure to",
                ", see how many little things you see along the way could come from the book (or movie) you just read or watched.",
                "Next, you’re off to",
                "—can you even believe it? And you must be getting hungry—you should ask to have a snack. Have you ever played the game called “Candy World” where everything in the world is made of some kind of candy? The wheels of a car could be Life Savers, and the steering wheel is a Sweetart. The back seat is like a chocolate bar, hot in the summer. What can be next?",
                "It’s",
                "! Are you surprised? What is the last thing that happened that made you really surprised? Was it a good or a bad surprise? Maybe you saw a spider right by your hand... or a flower bloomed overnight. Or maybe your brother or sister did something nice—that would be a total surprise, huh?",
                " It’s been a long day. You’re probably tired and maybe sticky, but you’re not done yet! You’re going to",
                " you remember the little things you were looking for from a book or movie, during the first part of this adventure? What if you were from a book or movie? Who would you want to be? For the very last adventure of this happy day, pretend that’s who you are."],
                ["There is a time and a place for everything, or so parents seem fond of saying, but today is not the day for homework, chores, or writing thank you notes. Today is for fun, kid-style!",
                "Is that a spider, or just a dried leaf? A little blue flower or a Smurf? If you’re around Hawthorne, look for those little horses tied up along the curb. As you start your adventure to",
                ", see how many little things you see along the way could come from the book (or movie) you just read or watched.",
                "Next, you’re off to",
                "—can you even believe it? And you must be getting hungry—you should ask to have a snack. Have you ever played the game called “Candy World” where everything in the world is made of some kind of candy? The wheels of a car could be Life Savers, and the steering wheel is a Sweetart. The back seat is like a chocolate bar, hot in the summer. What can be next?",
                "It’s",
                "! Are you surprised? What is the last thing that happened that made you really surprised? Was it a good or a bad surprise? Maybe you saw a spider right by your hand... or a flower bloomed overnight. Or maybe your brother or sister did something nice—that would be a total surprise, huh?",
                " It’s been a long day. You’re probably tired and maybe sticky, but you’re not done yet! You’re going to",
                " you remember the little things you were looking for from a book or movie, during the first part of this adventure? What if you were from a book or movie? Who would you want to be? For the very last adventure of this happy day, pretend that’s who you are."],
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Want to do something active, or relaxing... relatively speaking",
                "What are the kids into?",
                "where should we go?"
                // ""
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Something Active!", aaID:"get_going", values:["kid_parks", "swimming_pools","family_fun", "mt_tabor_park", "playgrounds", "for_kids", "oregon_zoo"]},
                {title:"Something Calm...please.", aaID:"start_slow", values:["library","keller_fountains", "kid_parks","playgrounds", "water_fountains", "walking_trails"]},
                          ],
            //Add strings for the displayed questions
            breakQuestions: [
                "On a scale from red to purple, how hungry are you?",
                "You must be hungry by now! How hungry are you, exactly?",
                "Are you hungry enough to eat snails? Hungry enough to eat a rattle snake?",
                "Why don't you get something to eat at picnic at the park?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"I'm hungry", aaID:"", values:["hometown_buffet", "burgerville", "kid_friendly_restaurant", "kids_meals", "farmers_market", "food_pod"]},
                {title:"I'm starving - and I'm an adventurous eater!", aaID:"starving", values:["kid_friendly_restaurant", "buffets_kid_friendly", "indian_cuisine", "namaste", "super_king","pizza", "food_carts"]},
                {title:"I'm hungry...aaand mom says I'm picky, but whatever", aaID:"", values:["hometown_buffet","pizza", "burgerville", "kid_friendly_restaurant"]},
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "All good stories, and days need to come to an end. How should we end it?",
                "Where should we go for our final place?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"OMGOMGOMG,I HAVE SO MUCH ENERGY RIGHT NOW!", aaID:"high_energy", values:["sky_high_sports", "kids_play_area", "oaks_park", "G6_airpark_portland","arcades", "playgrounds", "rec_center", "family_fun"]},
                {title:"I still have some exploring to do", aaID:"explore_more", values:["arial_tram","OMSI","community_garden", "childrens_museum", "oaks_park", "streetcar", "walking_trails"]},
                {title:"I'm ready to sit down!", aaID:"quiet_down", values:["library","laurelhurst_park","sauvie_island", "parks","water_fountains", "milkshakes", "garden"]},
            ],

            build: function(){
                if(outKids.active === true){
                    tree.root.outsideTree.theme.kidsTheme.stories = outKids.themeStories;
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

         };





         var inNightOut={
            active: true,
            themeStories: [
                ["The day is over, you got some friends, and staying inside doesn't sound like the thing for you! ","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                ["TGIF! YES FINALLY ITS FRIDAY NIGHT! Work is over, you just got paid (or at least if feels like it) and it Time to celibate!","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                // ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Its time to hit the town, where to?",
                "where should we go?",
                "On your night out what are you looking to do?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Dancing", aaID:"Dancing", values:["Night_club","Splash","Dance_club","Dancing"]},
                {title:"Drinks", aaID:"Drinks", values:["martini_bars","wine_bar","the_best_irish_pubs","best_bar"]},
                {title:"Games & More", aaID:"Games", values:["guardian_games","mini_golf","arcade","avalon","pool_hall"]},
                {title:"Music", aaID:"msuic", values:["juniper_hotel","live_music","music_venues"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "When its time to take a break, what should we do?",
                "Ok, time to take a break, what sounds like your cup of tea?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Break, No Breaks!", aaID:"no_breaks", values:["music_venues","best_bars","dance_clubs","martini_bars"]},
                {title:"Food Time!", aaID:"food", values:["food_pod","food_carts","fondue","good_bar_food"]},
                {title:"Music Break", aaID:"music", values:["live_music","coffee_with_music","blues_and_jazz"]},
                // {title:"", aaID:"", values:["","",""]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How should we end our night?",
                "Time to decide how to wrap up the evening, what are your thinking?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Desert!", aaID:"desert", values:["Desert","gelato","pied_cow","papa_haydens","great_desert"]},
                {title:"Coffee or Tea", aaID:"coffee&tea", values:["coffee_house","late_night_coffee","late_night_tea","pied_cow"]},
                {title:"One Final Drink", aaID:"drinks", values:["calm_bar","portland_city_grill","martini_bars","cocktail_bars"]},
                {title:"FOOOOOOOOOOD", aaID:"foooood", values:["food_pod","voodoo_donuts","waffle_window","late_night_food","bar_food"]}
            ],

            build: function(){
                if(inNightOut.active === true){
                    tree.root.insideTree.theme.nightOutTheme.stories = inNightOut.themeStories;
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

         };




        var outNightOut={
            active: true,
            themeStories: [
                ["Its time to hit the town! ","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                ["TGIF! YES FINALLY ITS FRIDAY NIGHT! Work is over, you just got paid (or at least if feels like it) and it Time to celibate!","Based on your responses we suggest starting at ",
                " its the kind of place that can really get the night going off on the right beat"," Then its time to take a breather at ","",
                "Lets make another stop at",", looking good if we do say so ourselves",
                "Finally lets end our night out on the town at",""],
                // ["","","","","","","","",""]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "It's time to hit the town!",
                "where should we go?",
                "Portland has the night life for you, where should we go?"
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Dancing", aaID:"Dancing", values:["Night_club","Splash","Dance_club","Dancing"]},
                {title:"Drinks", aaID:"Drinks", values:["martini_bars","wine_bar","the_best_irish_pubs","best_bar"]},
                {title:"Games & More", aaID:"Games", values:["guardian_games","mini_golf","arcade","avalon","pool_hall"]},
                {title:"Music", aaID:"msuic", values:["juniper_hotel","live_music","music_venues"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "When its time to take a break, what should we do?",
                "Ok, time to take a break, what sounds like your cup of tea?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"Break, No Breaks!", aaID:"no_breaks", values:["music_venues","best_bars","dance_clubs","martini_bars"]},
                {title:"Food Time!", aaID:"food", values:["food_pod","food_carts","fondue","good_bar_food"]},
                {title:"Music Break", aaID:"music", values:["live_music","coffee_with_music","blues_and_jazz"]},
                // {title:"", aaID:"", values:["","",""]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How should we end our night?",
                "Time to decide how to wrap up the evening, what are your thinking?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Desert!", aaID:"desert", values:["Desert","gelato","pied_cow","papa_haydens","great_desert"]},
                {title:"Coffee or Tea", aaID:"coffee&tea", values:["coffee_house","late_night_coffee","late_night_tea","pied_cow"]},
                {title:"One Final Drink", aaID:"drinks", values:["calm_bar","portland_city_grill","martini_bars","cocktail_bars"]},
                {title:"FOOOOOOOOOOD", aaID:"foooood", values:["food_pod","voodoo_donuts","waffle_window","late_night_food","bar_food"]}
            ],

            build: function(){
                if(outNightOut.active === true){
                    tree.root.outsideTree.theme.nightOutTheme.stories = outNightOut.themeStories;
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

         };





         var inFood={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["This is Portland, famed food destination, and today is the day you decide to check it out.","Your stomach is ready, you think, so you start at",". We hope that it was all you hoped for and more, and that you tried something new there. Every menu has something a little bit different, hiding away in the corner or as a special, perhaps, and since this is an adventure, we hope you take advantage of that."," The next place you go is",". Brilliant! Marvelous! The accolades come out of your mouth as you stretch, lay your napkin down, and possibly burp. Eating is hard work sometimes, but it's worth it."," You already know you have good tastes, and we hope we are encouraging you to also try something new. With that in mind, please enjoy",". Wasn't it good?","Finally, just one more place, one more favorite dish to find or local haunt to finally visit. Hey, it's ",", the last place on your list. It's no New York, maybe, but at the end we hope you see Portland can hold its own in the food world. And we hope you tipped your servers."],
                ["The day is young, or maybe not, and you have many meals to get through.","Your first stop is",", but a true foodie doesn't stop just there."," March along now, pick up your fork, chopstick, napkin, or straw, and enjoy ", ". I feel like now's a good time to tell you about the urban legend in Portland about sous chefs breaking into people's gardens at night, snipping away fresh herbs and homegrown vegetables to feed the public, clamoring for quality food."," We hope that doesn't actually happen, but if it does, it's a good story to tell your friends outside of the normal Portlandia jokes. Anyways, hope the sous chefs are behaving themselves at",", your next destination. ","The end is near now, we're sorry to say, but hopefully you are still a little bit hungry, because it's time for ",". And then, in a food coma after experiencing the range of gustatory pleasures that this city has to offer, you're done. Maybe you have some pictures to post on Instagram to make your friends jealous of what you tried, or if that's not your style, we hope, at least, that you enjoyed yourself and that you tipped your servers."]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Do you want something trendy, comforting, potentially exotic, or vegan/vegetarian friendly?",
                "There are so many places to eat; let's narrow it down a bit: the hippest place in town, good old-fashioned comfort food, ethnic food, or just a nice, vegetarian-friendly place?",
                "So many options! Just pick one and you will feel better; it's all good."
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Give me a trendy place to eat.", aaID:"trendy", values:["american_(new)","tapas","gastropubs", "french", "asian_fusion"]},
                {title:"I want comfort food!", aaID:"comforting", values:["southern_food","comfort_food","pub", "breakfast_and_brunch", "pho", "pizza"]},
                {title:"Variety is the spice of life: let's have a place with food from a different country.", aaID:"exotic", values:["ethiopian","thai","middle_eastern", "indian", "chinese", "vietnamese", "mexican", "peruvian", "german", "scandinavian"]},
                {title:"No meat, please.", aaID:"vegetarian", values:["vegan","vegetarian"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "Do you want more restaurants, in general, a change of pace with different food, or do you need a break from food entirely?",
                "Ready for a break from food, or do you want to keep going?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"I love gluten, savory or sweet.", aaID:"bakeries", values:["bakeries","german_bakery","pastries"]},
                {title:"Yes, more food in general, please, anything is good!", aaID:"", values:["restaurants","cajun","sandwiches", "argentine", "italian", "modern_european"]},
                {title:"I need a break - let's get something to drink", aaID:"", values:["shakes","smoothies","specialty_drinks", "juice_bars", "coffee", "tea"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "How about we shop for ingredients, or do you want dessert, or something else entirely?",
                "There's more to food than restuarants, so choose something new for the end of your adventure:"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Let's go to a grocery store.", aaID:"grocery", values:["organic_food","grocery","specialty_grocery", "coop"]},
                {title:"Dessert, definitely.", aaID:"dessert", values:["dessert","ice_cream","doughnuts","candy_stores", "chocolate"]},
                {title:"Um, actually, I want a juice bar or other health food place.", aaID:"healthy", values:["juice_bar","health_food","live/raw_food", "kombucha"]},
                {title:"I know I chose an indoor adventure, but I heard so much about those food trucks...", aaID:"food_truck", values:["food_trucks","food_pod","food_cart"]}
            ],

            build: function(){
                if(inFood.active === true){
                    tree.root.insideTree.theme.foodieTheme.stories = inFood.themeStories;
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

         };




        var outFood={
            active: true,  //make true when done
            // input stories for this theme
            // intro, preFirst Place, postFirstPlace, preSecond Place, postSecond Place, preThird place, postThird place, preLast place, Post last
            themeStories: [
                ["It's a great day to walk, or drive, or bus, or bike around Portland and see what food the city has to offer.","Let's begin then, right? "," will be the first place you order food, and I hope you can sit outside somewhere while you eat."," There is something about eating outside in Portland, right? Watching the people go by, enjoying the precious sun or just enjoying whatever weather the Pacific Northwest serves up, delicious food and good drink on hand. Next up is",", and I hope you left some room for the next two places.","Right off the bat we have"," but budget your time, because next up is","","I hope you're pleasantly full and have experienced some of what this great food city has to offer. That's one adventure down; click back to home and try another, if you want. There's a whole city to explore!"],
                ["Leave your home and hit the streets, because there is so much good food here and not nearly enough time to try it all. ","We will try our best, though, I promise. Let's start with"," , but I hope you left some room, though, because there are three more places to go!","Like "," the next destination on this delicious tour. Don't be afraid to try new things or to ask your waiter or even the person behind you in line what's best. Don't believe everything you read on the internet, either; most places have at least one hidden gem, no matter the ratings or lack of hylp."," Sorry if that sounds like preaching, but food is important, and a proper mindset is also important, particularly when trying new things. So, without further ado, head over to "," and order whatever you want!"," Finally, head on over to "," and enjoy this last destination. Portland really is a great food city, right?"]
            ],
            //Add strings for the displayed questions
            //the more you add, the more random it will feel.
            themeQuestions: [
                "Do you want something trendy, the classic food truck, something potentially exotic, or vegan/vegetarian friendly?",
                "There are so many places to eat; let's narrow it down a bit: the hippest place in town, the classic Portland food truck, ethnic food, or just a nice, vegetarian-friendly place?",
                "So many options! Just pick one and you will feel better; it's all good."
            ],
            //Add button content.
            //Depending on how many search terms you have you want 2-4 buttons
            //Delete any extra button lines
            //You may want to add more strings for search terms.
                //tittle: what will be displayed on the button.
                //aaID: just an id to track in the logs. simple id for the button
                //values: strings of search terms. break up words with '_'
            themeButtons: [
                {title:"Give me a trendy place to eat.", aaID:"trendy", values:["american_(new)","tapas","gastropubs", "french", "asian_fusion"]},
                {title:"I want food trucks, this is Portland, after all!", aaID:"food_truck", values:["food_truck","food_pod","food_cart"]},
                {title:"Variety is the spice of life: let's have a place with food from a different country.", aaID:"exotic", values:["ethiopian","thai","middle_eastern", "indian", "chinese", "vietnamese", "mexican", "peruvian", "german", "scandinavian"]},
                {title:"No meat, please.", aaID:"vegetarian", values:["vegan","vegetarian"]}
            ],
            //Add strings for the displayed questions
            breakQuestions: [
                "Ok, how about comfort food or something healthier?",
                "Stereotypical Portland health food, or stereotypical Portland comfort food?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            breakButtons: [
                {title:"I want comfort food!", aaID:"comforting", values:["southern_food","comfort_food","pub", "breakfast_and_brunch", "pho", "pizza"]},
                {title:"I want health(ier) food!", aaID:"healthy", values:["juice_bar","health_food","live/raw_food", "kombucha"]}
            ],
            //Add strings for the displayed questions
            wrapQuestions: [
                "It's the end, how would you like to finish your adventure?",
                "How you end your foodie adventure?"
            ],
            //tittle: what will be displayed on the button.
            //aaID: just an id to track in the logs. simple id for the button
            //values: strings of search terms. break up words with '_'
            wrapButtons: [
                {title:"Let's go to a farmer's market.", aaID:"farmers_market", values:["farmers_market","farm_stand"]},
                {title:"Let's do something entirely different.", aaID:"", values:["forktown_food_tours","kombucha","bakeries"]},
                {title:"With dessert, of course.", aaID:"", values:["dessert","ice_cream","doughnuts","candy_stores", "chocolate"]},
                {title:"With something to drink.", aaID:"", values:["shakes","smoothies","specialty_drinks", "juice_bars", "coffee", "tea"]}
            ],

            build: function(){
                if(outFood.active === true){
                    tree.root.outsideTree.theme.foodieTheme.stories = outFood.themeStories;
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

         };






        /*Content build Block No Need To edit*/

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
