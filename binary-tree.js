class BinaryTree {
  constructor() {
    this.root = null;
  }

  createNode(key) {
    return {
      key,
      left: null,
      right: null
    };
  }

  insert(key) {
    const newNode = this.createNode(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  search(key) {
    return this.searchNode(this.root, key);
  }
}

const netTree = new BinaryTree();

netTree.insert(10);
netTree.insert(6);
netTree.insert(3);
netTree.insert(4);
netTree.insert(5);
netTree.insert(7);
netTree.insert(1);

netTree;

console.log(netTree.search(1));
