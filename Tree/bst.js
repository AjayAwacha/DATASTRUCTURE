class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return true;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (val > current.val) {
                    if (!current.right) {
                        current.right = newNode;
                        return this
                    }
                    current = current.right;
                }
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            }
        }
        return false;
    }

    BFS() {
        if (!this.root) return [];
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
       let data = [];
       let current = this.root;
       function traverse(node) {
        data.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
       }
       traverse(current);
       return data; 
    }

    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverser(node) {
            if(node.left) traverser(node.left);
            if(node.right) traverser(node.right);
            data.push(node.val);
        }
        traverser(current);
        return data;
    }

    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverser(node) {
            if(node.left) traverser(node.left);
            data.push(node.val);
            if(node.right) traverser(node.right);
        }
        traverser(current);
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(14);
tree.insert(6);
tree.insert(17);
tree.insert(20);
tree.insert(15);
tree.insert(8);
tree.insert(4);
// console.log(tree.find(9));
// console.log(tree.BFS());
// console.log(tree.DFSPreOrder());
// console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());