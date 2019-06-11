class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
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

  loopBack() {
    let node = this.getTail();
    while (node) {
      console.log(node.val);
      node = node.prev;
    }
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.getTail();
      newNode.prev = tail;
      tail.next = newNode;
    }
  }

  pop() {
    let tail = this.getTail();
    if (tail) {
      let removed = tail;
      let prevNode = tail.prev;
      prevNode ? (prevNode.next = null) : (this.head = null); // edge case: empty list
      return removed;
    }
  }

  shift() {
    if (this.head) {
      let removed = this.head;
      this.head = removed.next;
      if (this.head) this.head.prev = null;
      return removed;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    let nextNode = this.head;
    if (nextNode) nextNode.prev = newNode;
    newNode.next = nextNode;
    this.head = newNode;
    return newNode;
  }

  get(n) {
    if (this.head && n >= 0) {
      let idx = 0;
      let current = this.head;
      while (current) {
        if (idx === n) {
          return current;
        }
        current = current.next;
        idx++;
      }
    }
  }

  set(idx, val) {
    let target = this.get(idx);
    if (!target) return false;
    target.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0) return false;
    if (idx === 0) return !!this.unshift(val);
    const prevNode = this.get(idx - 1);
    if (prevNode) {
      const newNode = new Node(val);
      const nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      if (nextNode) nextNode.prev = newNode;
      return true;
    }
    return false;
  }

  remove(idx) {
    if (idx < 0) return false;
    if (idx === 0) return !!this.shift();
    const removed = this.get(idx);
    if (removed) {
      const prevNode = removed.prev;
      const nextNode = removed.next;
      prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
      return removed;
    }
  }

  reverse() {
    if (!this.head || !this.head.next) return this;
    let nextNode,
      prevNode = null;
    let current = this.head;
    while (current) {
      nextNode = current.next;
      current.prev = nextNode;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }
    this.head = prevNode;
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

  getTail() {
    if (!this.head) return undefined;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
}

test = new DLL();
test.push("d1");
test.push("d2");
test.push("d3");
