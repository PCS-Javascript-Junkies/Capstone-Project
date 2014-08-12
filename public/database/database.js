// var source = $("../server-templates/tree.html").html();
// var template = Handlebars.compile(source);
/**
 * Creates a BinarySearchTree toolbox function
 * that will be utilized to build a decision tree
 * calling the BinarySearchTree function you will
 * create a tree with a root node.
 *
 * To avoid errors the database should be built from the root down
 *         []<-root
 */
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
        "id": "root",
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
                   pointer = this.root.insidetree.theme.hostingTHeme;
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
                   pointer = this.root.outsidetree.theme.hostingTHeme;
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


module.exports = QuestionTree;








































//     }

//     add: function (data, id){
//     var node = {
//         "id": id,
//         "questions": data,
//         "left": null,
//         "right": null
//     };

// //console.log(node);


//     var pointer; //pointer pointer. use to find things in the tree.

//     /**
//      * Checks to see if root is null, if it is then adds the node there
//      * @type {[node]}
//      */
//     if(this.root === null){
//         this.root = node;
//     } else {
//     pointer = this.root;

//     /**
//      * if root does exist traverse the tree until you reach the end.
//      * and add where needed. All instances of pointer.left/right = node
//      * is a creation of a new node.
//      */
//     while(pointer){
//         if(id < pointer.id){
//             if(pointer.left === null){
//                 pointer.left = node;
//                 break;
//             }else{
//                 pointer = pointer.left;
//             }
//         } else if (id > pointer.id){
//             if(pointer.right === null){
//                 pointer.right = node;
//                 break;
//             } else {
//                 pointer = pointer.right;
//             }
//             }else {
//                     break;
//                 }
//             }
//         }
//     },

//     get: function (toFind){
//         var found = false;
//         var pointer = this.root;
//         while(!found && pointer){
//             if(toFind < pointer.id){
//                 parent = pointer;
//                 pointer = pointer.left;
//             } else if ( toFind > pointer.id){
//                 parrent = pointer;
//                 pointer = pointer.right;
//             } else if (toFind === pointer.id){
//                 found = true;
//             }
//         }
//         return pointer;
//     },

//     remove: function (toFind){
//         var found = false;
//         var parent = null;
//         var pointer = this.root;
//         var childCount;
//         var replacementNode;
//         var replacementParent;

//         while(!found && pointer){
//             if(toFind < pointer.id){
//                 parent = pointer;
//                 pointer = pointer.left;
//             } else if ( toFind > pointer.id){
//                 parrent = pointer;
//                 pointer = pointer.right;
//             } else if (toFind === pointer.id){
//                 found = true;
//             }
//         }

//         if (found){
//             childCount = (pointer.left !== null ? 1: 0) +
//                 (pointer.right !== null ? 1: 0);
//             if (pointer === this.root){
//                 switch (childCount){
//                     case 0:
//                         this.root = null;
//                         break;
//                     case 1:
//                         this.root = (pointer.right === null ?
//                         pointer.left : pointer.right);
//                         break;
//                     case 2:
//                         replacementNode = pointer.left;
//                         replacementParent = pointer;

//                         while(replacementNode.right !== null){
//                             replacementParent = replacementNode;
//                             replacementNode = replacementNode.right;
//                         }

//                         replacementParent.right = replacementNode.left;

//                         replacementNode.right = pointer.right;
//                         replacementNode.left = pointer.left;

//                         if (pointer.data < parent.data){
//                             parent.left = replacementNode;
//                         } else {
//                             parent.right = replacementNode;
//                         }
//                 }
//             }
//         }
//     },


//     display: function(root){
//        console.log("Questions in node " +root.id+ " :",root.questions);
//         if(root.left !== null)
//             this.display(root.left);
//         if(root.right !== null)
//             this.display(root.right);
//     }
// };

// module.exports = BinarySearchTree;
