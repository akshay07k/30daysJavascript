class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree{
    constructor(){
        this.root = null;
    }

    buildTree(arr){
        let q = [];
        let n = arr.length, i=1;
        const node = new TreeNode(arr[0]);
        q.push(node);

        while(i<n && q.length !== 0){
            let parent = q.shift();

            if(arr[i] != -1){
                const newNode = new TreeNode(arr[i]);
                parent.left = newNode;
                q.push(newNode);
            }
            i++;
            if(arr[i] != -1){
                const newNode = new TreeNode(arr[i]);
                parent.right = newNode;
                q.push(newNode);
            }
            i++;
        }
        this.root = node;
    }

    inOrder(node, arr = []){
        if(!node){
            return arr;
        }
        this.inOrder(node.left, arr);
        arr.push(node.value);
        this.inOrder(node.right, arr);
        return arr;
    }
}


const btree = new BinaryTree();

btree.buildTree([1,2,3,4,5,6,7,8,-1,-1,-1,-1,-1,9])
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
//   /         /
//  8         9
console.log(btree.inOrder(btree.root).join(' '));