
/**
 * Creates a BinarySearchTree toolbox function
 * that will be utilized to build a decision tree
 * calling the BinarySearchTree function you will
 * create a tree with a root node. 
 *
 * To avoid errors the database should be built from the root down
 *         []<-root 
 */
function BinarySearchTree() {
    this.root = null;
}


BinarySearchTree.prototype = {
    /**
     * adds the  "add" method to the BinarySearchTree Prototype
     * this can be used to add a node to the tree.
     * @param {Array} data [This is the array of questions in the tree]
     * @param {number} id  [also pass a number value to the add function
     *                      so that the function knows where to place it]
     */
    add: function (data, id){
    var node = {
        "id": id,
        "questions": data,
        "left": data.left,
        "right": data.right
    };


    var current; //current pointer. use to find things in the tree. 

    /**
     * Checks to see if root is null, if it is then adds the node there
     * @type {[node]}
     */
    if(this.root === null){
        this.root = node;
    } else {
    current = this.root;

    /**
     * if root does exist traverse the tree until you reach the end.
     * and add where needed. All instances of current.left/right = node
     * is a creation of a new node.  
     */
    while(current){
        if(id < current.id){
            if(current.left === null){
                current.left = node;
                break;
            }else{
                current = current.left;
            }
        } else if (id > current.id){
            if(current.right === null){
                current.right = node;
                break;
            } else {
                current = current.right;
            }
            }else {
                    break;
                }
            }
        }
    },
};


BinarySearchTree.prototype = {
    remove: function (data){
        var found = false;
        var parent = null;
        var current = this.root;
        var childCount;
        var replacementNode;
        var replacementParent;

        while(!found && current){
            if(data.id < current.id){
                parent = current;
                current = current.left;
            } else if ( vdata.id > current.id){
                parrent = current;
                current = current.right;
            } else {
                found = true;
            }
        }

        if (found){
            childCount = (current.left !== null ? 1: 0) +
                (current.right !== null ? 1: 0);
            if (current === this.root){
                switch (childCount){
                    case 0:
                        this.root = null;
                        break;
                    case 1:
                        this.root = (cirrent.right === null ?
                         current.left : current.right);
                        break;
                    case 2:
                        replacementNode = currentNode.left;
                        replacementParent = currentNode;

                        while(replacementNode.right !== null){
                            replacementParent = replacementNode;
                            replacementNode = replacementNode.right;
                        }

                        replacementParent.right = replacementNode.left;

                        replacementNode.right = currentNode.right;
                        replacementNode.left = currentNode.left;

                        if (currentNode.data < parentNode.data){
                            parentNode.left = replacementNode;
                        } else {
                            parentNode.right = replacementNode;
                        }
                }
            }
        }
    },
};

BinarySearchTree.prototype = {
    traverse: function (convertFunciton){
        function iterate(node){
            if (node){
                if(node.left !== null){
                    iterate(node.left);
                }
                convertFunciton.call(this, node);

                if(node.right !== null){
                    iterate(node.right);
                }
            }
        }
        iterate(this.root);
    },

    toArray: function(){
        var result = [];
        this.traverse(function(node){
            result.push(node.data);
        });

        return result;
    },

    toString: function (){
        return this.toArray.toString();
    },

//     display: function(){
//         if (this.root){
//             if(root.left !== null){
//                 iterate(node.left);
//             }
//             convertFunciton.call(this, node);

//             if(node.right !== null){
//                 iterate(node.right);
//             }
//         }
//     }
//     iterate(this.root);
// },

};

module.exports = BinarySearchTree;
