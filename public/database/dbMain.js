


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

        console.log(tree);

        var barQuestions = ["Do you feel like beer, wine, or spirits? ",
        "In the mood for hops, grapes, or the hard stuff? ", "If you are at a bar you would order: ",];


        var barButton=[
        {title:"Beer", aaID:"beer", values:["irish_pubs","pubs","breweries","sportsbars"]},
        {title:"Wine", aaID:"wine", values:["wine_bars","champagne_bars","beer_and_wine"]},
        {title:"Mixed Drinks", aaID:"liquor", values:["distilleries","cocktailbars",
        "lounges","piano bars"]},
        {title:"Surprise Me", aaID:"all", values:["irish_pubs","pubs","breweries",
        "sportsbars","wine_bars",
        "champagne_bars","beer_and_wine","distilleries","cocktailbars","lounges,piano bars"]},
        ];

        var breakQuestions = ["To take it down a notch you A) listen to music, B) like coffee and tee, C) 'I dont understand the words take a break' ",
                            "After a few hours of drinking I feel like food, a quick snack, or more drinking! (resposibly)"];

        var breakButton=[
        {title:"Music Sounds Nice", aaID:"music", values:["musicvenues","piano bars",
        "breweries","jazzandblues"]},
        {title:"Tea Time", aaID:"coffee", values:["coffee","tea",]},
        {title:"Keep the Party Gong!", aaID:"again", values:["distilleries",
        "cocktailbars","lounges","piano bars"]},
        {title:"Chow Time", aaID:"food", values:["irish_pubs","pubs","breweries","sportsbars"]},
        ];

        var wrapQuestions = ["Desert, Drinks again, or greasy food?"];

        var wrapButton =[
        {title:"Desert", aaID:"Desert", values:["cupcakes","desserts","donuts"]},
        {title:"Keep the Party Gong!", aaID:"again", values:["irish_pubs","pubs",
        "breweries","sportsbars",
        "wine_bars","champagne_bars","beer_and_wine", "distilleries","cocktailbars",
        "lounges","piano bars"]},
        {title:"Chow Time", aaID:"food", values:["irish_pubs","pubs","breweries","sportsbars"]},
        ];


        // var barNode = tree.root.insideTree.theme.breweryTheme;



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




        tree.root.insideTree.theme.breweryTheme.next.questions = barQuestions;
        tree.root.insideTree.theme.breweryTheme.next.buttons = barButton;
        tree.root.insideTree.theme.breweryTheme.next.next.questions = breakQuestions;
        tree.root.insideTree.theme.breweryTheme.next.next.buttons = breakButton;
        tree.root.insideTree.theme.breweryTheme.next.next.next.questions = barQuestions;
        tree.root.insideTree.theme.breweryTheme.next.next.next.buttons = barButton;
        tree.root.insideTree.theme.breweryTheme.next.next.next.next.questions = wrapQuestions;
        tree.root.insideTree.theme.breweryTheme.next.next.next.next.buttons = wrapButton;

};












//console.log(tree.current.outsideTree);

module.exports=QuestionTree;
