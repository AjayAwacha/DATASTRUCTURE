// implement queque using Array
class Queqe {
    constructor() {
        this.items = [];
    }

    add(val) {
        this.items.push(val);
    }

    remove() {
        this.items.shift();
    }
}
// const q = new Queqe();
// q.add(10);
// q.add(20);
// q.add(30);
// q.remove();
// console.log(q);

// implement queue using linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class QueueLL {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // same functionality like push
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    // same like shift // remove first element
    dequeue() {
        if (!this.first) return undefined;
        let currentFirst = this.first;
        this.first = currentFirst.next;
        this.size--;
        return this;
    }
}

const que = new QueueLL();
que.enqueue('First');
que.enqueue('Secound');
que.enqueue('Third');
que.dequeue();
