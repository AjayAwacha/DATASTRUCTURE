// stack Implementation using Array
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        this.items.pop();
    }
}
// const st = new Stack();
// st.push(10);
// st.push(20);
// st.push(30);
// st.pop();
// console.log(st);

// stack Implementation using linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class StackLL {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return newNode;
    }

    pop() {
        debugger
        if (!this.first) return undefined;
        let current = this.first;
        let newLast = current;
        while(current.next) {
            newLast = current;
            current = current.next;
        }
        newLast.next = null;
        this.last = newLast;
        this.size--;
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return this;
    }
}

const stLL = new StackLL();
stLL.push(10);
stLL.push(20);
stLL.push(30);
stLL.pop();
debugger
console.log(stLL);