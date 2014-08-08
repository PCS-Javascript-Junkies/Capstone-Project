var db = require("./database.js");

tree = new db();

tree.startTree();

var questions = ["Question 1","Question 2", "Question 4",
				"Question 5"];
var theme = ["chill","kids","foodie","hosting","active",
			"tgif","nightOut","brewery"];
var level = ["","mainItem", "breatherItem", "endingItem" ];

//outside theme building
theme.forEach(function(item){
	tree.buildTheme("outside", item);
});

//build inside theme
theme.forEach(function(item){
	tree.buildTheme("inside", item);
});

tree.addToTheme("outside", theme[4],
    level[1],questions);

tree.addToTheme("outside", theme[4],
    level[2],questions);

tree.addToTheme("outside", theme[4],
    level[1],questions);

tree.addToTheme("outside", theme[4],
    level[3],questions);

//console.log(tree.root.outsideTree.theme.activeTheme.head);

console.log(tree.current.outsideTree);




