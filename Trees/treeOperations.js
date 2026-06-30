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
  preOrder(node){
    if(node === null){
      return;
    }
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  inOrder(node){
    if(node===null){
      return;
    }
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
  postOrder(node){
    if(node===null){
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
  heightOfTree(node){
    if(node===null){
      return 0;
    }
    return Math.max(this.heightOfTree(node.left), this.heightOfTree(node.right))+1;
  }
  countNodes(node){
    if(node===null){
      return 0;
    }
    return this.countNodes(node.left)+this.countNodes(node.right)+1;
  }
  sumOfNodes(node){
    if(node===null){
      return 0;
    }
    return this.sumOfNodes(node.left)+this.sumOfNodes(node.right)+node.value;
  }
  maxNode(node){
    if(node===null){
      return 0;
    }
    return Math.max(this.maxNode(node.left), this.maxNode(node.right), node.value);
  }
  searchNode(node, target){
    if(node === null){
      return false;
    }
    if(node.value === target){
      return true;
    }
    return this.searchNode(node.left, target)||this.searchNode(node.right, target);
  }
  countLeafNodes(node){
    if(node === null){
      return 0;
    }
    if(node.left === null && node.right === null){
      return 1;
    }
    return this.countLeafNodes(node.left)+this.countLeafNodes(node.right);
  }
}


const tree = new BinaryTree();
tree.root = new TreeNode(10);
tree.root.left = new TreeNode(5);
tree.root.right = new TreeNode(15);
tree.root.left.left = new TreeNode(3);
tree.root.left.right = new TreeNode(7);
console.log('y', tree.preOrder(tree.root));
console.log(tree.sumOfNodes(tree.root));
console.log(tree.maxNode(tree.root));
console.log(tree.searchNode(tree.root, 3));
console.log(tree.countLeafNodes(tree.root));  





