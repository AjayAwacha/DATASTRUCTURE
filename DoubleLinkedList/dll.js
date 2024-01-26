class Node {
    constructor(val) {
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert Item at the end of Double Linked List
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove Item at last Index
    pop() {
        if (!this.head) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.pre;
            newTail.next = null;
            this.tail = newTail;
        }
    }

    // remove element from starting
    shift() {
        if (!this.head) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = this.head.next;
            newHead.pre = null;
            this.head = newHead;
        }
        this.length--;
        return this;
    }

    // Inserting element in starting
    unShift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.pre = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get Item at specific Index
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }

    // set Item at specific Index
    set(index, val) {
        let node = this.get(index);
        if (!node) return undefined; 
        node.val = val;
        return true;
    }

    // Insert Element at specific index
    insert(index, val) {
        debugger
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) {
            return !!this.unShift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        let newNode = new Node(val)
        let preNode = this.get(index - 1);
        let nextNode = preNode.next;

        newNode.next = nextNode;
        newNode.pre = preNode;
        preNode.next = newNode;
        nextNode.pre = newNode;
        this.length++;
        return true;
    }

    // remove element at specific index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length -1) return !!this.pop();

        let removedNode = this.get(index);
        let previousNode = removedNode.pre;
        let nextNode = removedNode.next;

        previousNode.next = nextNode;
        nextNode.pre = previousNode;

        removedNode.next = null;
        removedNode.pre = null;

        this.length--;
        return removedNode;
    }
}

const dll = new DoubleLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
// dll.pop();
// console.log(dll.head);
// dll.shift();
// console.log(dll.get(2));
dll.insert(2, 400);
console.log(dll.head);

