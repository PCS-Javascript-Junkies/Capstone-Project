///hard coded complete adventure tree object
 var tree = {
  firstNode: {
    description: "first node",
    linkLeft: function () {
      return tree.secondNodeLeft;
    },
    linkRight: function () {
      return tree.secondNodeRight;
    },
    isPresentNode: true
  },
  secondNodeLeft: {
    description: "second node left",
    linkLeft: function () {
      return tree.resultA;
    },
    linkRight: function () {
      return tree.resultB;
    },
    isPresentNode: false
  },
  secondNodeRight: {
    description: "second node right",
    linkLeft: function () {
      return tree.resultC;
    },
    linkRight: function () {
      return tree.resultD;
    },
    isPresentNode: false
  },
  resultA: {
    description: "result a",
    isPresentNode: false,
    endAdventure: function () {
      console.log("adventure has ended!");
    }
  },
  resultB: {
    description: "result b",
    isPresentNode: false,
    endAdventure: function () {
      console.log("adventure has ended!");
    }
  },
  resultC: {
    description: "result c",
    isPresentNode: false,
    endAdventure: function () {
      console.log("adventure has ended!");
    }
  },
  resultD: {
    description: "result d",
    isPresentNode: false,
    endAdventure: function () {
      console.log("adventure has ended!");
    }
  }
 }
//return what is the present node:
function presentNode(tree) {
  for (var prop in tree) {
    for (var childProp in tree[prop]) {
      if (tree[prop][childProp] === true) {
        return tree[prop];
      }
    }
  }
}

var key;

function traverseTree(buttonClick) {
  if (buttonClick === "left") {
    var key = presentNode(tree).linkLeft();
    presentNode(tree).isPresentNode = false;
    key.isPresentNode = true;
    return key;
  } else if (buttonClick === "right") {
    var key = presentNode(tree).linkRight();
    presentNode(tree).isPresentNode = false;
    key.isPresentNode = true;
    return key;
  } else if (buttonClick === "done") {
    var key = presentNode(tree).endAdventure();
    presentNode(tree).isPresentNode = false;
    key.isPresentNode = true;
    return key;
  }
}