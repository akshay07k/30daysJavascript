// Activity5
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

// Example usage:
// Constructing the following binary tree:
//         4
//       /   \
//      2     6
//     / \   / \
//    1   3 5   7

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
// root.right.right.left = new TreeNode(8);


// inOrderTraversal(root);

function treeDepth(root, depth = 0) {
    if(!root){
        return depth;
    }

    const leftDepth = treeDepth(root.left, depth+1);
    const rightDepth = treeDepth(root.right, depth+1);
    return Math.max(leftDepth, rightDepth);
}

// console.log(treeDepth(root))