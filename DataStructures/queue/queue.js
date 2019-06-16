class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      const lastNode =  this.rear;
      lastNode.next = newNode;
      this.rear = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    const front = this.front;

    if (!front) return;
    else this.front = front.next;
    if (!this.front) this.rear = null;
    this.length--;
    
    return front;
  }
}