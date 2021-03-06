class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  loopAll() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  getTail() {
    if (!this.head) return undefined;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      const tail = this.getTail();
      tail.next = node;
    }
    return val;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let prevNode,
      current = this.head;
    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    if (prevNode) {
      prevNode.next = null;
    } else {
      this.head = null;
    }
    return current;
  }

  shift() {
    if (this.head) {
      let start = this.head;
      this.head = this.head.next;
      return start;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    return val;
  }

  get(idx) {
    if (idx < 0) return undefined;
    let i = 0;
    let current = this.head;
    while (i < idx && current) {
      current = current.next;
      i++;
    }
    return current ? current : undefined;
  }

  set(idx, val) {
    let current = this.get(idx);
    if (!current) return false;
    current.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0) return false;
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    const prevNode = this.get(idx - 1);
    if (prevNode) {
      const newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      return true;
    }
    return false;
  }

  remove(idx) {
    if (idx < 0) return false;
    if (idx === 0) return this.shift();
    const prevNode = this.get(idx - 1);

    if (prevNode) {
      const removed = prevNode.next;
      prevNode.next = removed.next;
      return true;
    }
    return false;
  }

  reverse() {
    if (!this.head || !this.head.next) return this;
    let nextNode,
      prevNode = null;
    let current = this.head;
    while (current) {
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }
    this.head = prevNode; // at this point, reached end, so current = null
    return this;
  }

  getMiddle() { // for even lengths, we'll return the lower middle node
    // alternatively: length = this.getLength() & middle = Math.floor(length/2)
    if (!this.head) return undefined;
    let mid = this.head;
    let current = this.head;
    let moves = 0;
    while (current) {
      current = current.next;
      if (current) moves++;
      if (moves === 2) {
        moves = 0;
        mid = mid.next;
      }
    }
    return mid;
  }

  getLength() {
    let length = 0, node = this.head;
    while (node) {
      node = node.next;
      length++;
    }
    return length;
  }
}

test = new SLL();
test.push("s1");
test.push("s2");
test.push("s3");
