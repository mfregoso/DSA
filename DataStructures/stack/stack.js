class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.top) this.top = newNode;
    else {
      const topNode = this.top;
      newNode.next = topNode;
      this.top = newNode;
    }

    return ++this.length;
  }

  pop() {
    const topNode = this.top;
    
    if (topNode) {
      this.top = topNode.next;
      this.length--;
      return topNode;
    }
  }

  peek() {
    if (this.top) return this.top;
  }
}
