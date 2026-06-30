class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// const node1 = new TreeNode(10);
// const node2 = new TreeNode(5);
// const node3 = new TreeNode(15);
// console.log(node1.val);

// const root = new TreeNode(10);
// root.right = new TreeNode(15);
// root.left = new TreeNode(5);
// root.left.left = new TreeNode(3);
// root.right.right = new TreeNode(7);

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new TreeNode(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.val) return undefined;
        }
        if(value<current.val){
            if(current.left === null){
            current.left = newNode;
            return this;
        }
                current = current.next;  
        }else{
            if(current.right === null){
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
   
    }
}
