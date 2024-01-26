class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add element at position last
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    // remove element at position last
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail; 
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return newTail;
    }

    // remove first element
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

    // add element at first position
    unShift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 && index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        let current = this.get(index);
        if (!current) return null;
        current.val = val;
        return current
    }

    insert(index, val) {
        if (index < 0 && index > this.length) return null;
        if (index === 0) {
            return !!this.unShift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        let newNode = new Node(val);
        let preNode = this.get(index -1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 && index >= this.length) return null;
        if (index === 0) {
            this.shift();
        }
        if (index === this.length -1) {
            this.pop();
        }
        let preNode = this.get(index -1);
        let removedNode = preNode.next;
        preNode.next = removedNode.next;
        this.length--;
        return true;
    }

    print() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

const ssl = new singleLinkedList();
console.log(ssl.push(10));
console.log(ssl.push(20));
console.log(ssl.push(30));
console.log(ssl.push(40));
// console.log(ssl.pop())
// console.log(ssl.set(1, 200));
// console.log(ssl.insert(2, 40));
// console.log(ssl.remove(2));
// console.log(ssl.head);
ssl.print();