//var db = require("./database.js");


function QuestionTree() {
    this.root = null;
    this.current =null;
}


QuestionTree.prototype = {
    startTree: function(insideOutsideQ, AreaQ){
    var theme ={
        "theme": "themeID",
        "themeQuestions": null,

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
        "themeNode": null

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


    buildTheme: function (inOrOut, title){
        var node ={
            "title": title,
            "head": null
        };

        if(inOrOut === "inside"){
            switch(title){
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
            switch(title){
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

    addToTheme: function (inOrOut, theme, type, qArray, cArray){
        var pointer;
        var node ={
            "type": type,
            "questions": qArray,
            "categories": cArray,
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
        if(pointer.head === null){
            pointer.head = node;
        }else{
            pointer = pointer.head;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next=node;
        }
    },

    display: function(){
        var pointer = this.root;

    },


};











tree = new QuestionTree();

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
for(var i =0; i< 7; ++i){
tree.addToTheme("outside", theme[i],
    level[1],questions);

tree.addToTheme("outside", theme[i],
    level[2],questions);

tree.addToTheme("outside", theme[i],
    level[1],questions);

tree.addToTheme("outside", theme[i],
    level[3],questions);
}


for(var i =0; i< 7; ++i){
tree.addToTheme("inside", theme[i],
    level[1],questions);

tree.addToTheme("inside", theme[i],
    level[2],questions);

tree.addToTheme("inside", theme[i],
    level[1],questions);

tree.addToTheme("inside", theme[i],
    level[3],questions);
}
//console.log(tree.root.outsideTree.theme.activeTheme.head);

//console.log(tree.current.outsideTree);

// module.exports=tree;



