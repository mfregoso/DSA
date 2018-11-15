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
    this.tail = null;
  }

  loopAll() {
    let current = this.head;
    let idx = -1;
    while (current) {
      console.log(++idx + ": " + current.val);
      current = current.next;
    }
    console.log("length = " + ++idx);
  }

  loopBack() {
    let current = this.tail;
    while (current) {
      console.log(current.val);
      current = current.prev;
    }
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (this.tail) {
      let removed = this.tail;
      let prevNode = this.tail.prev;
      this.tail = prevNode;
      this.tail ? (prevNode.next = null) : (this.head = null); // edge case: empty list
      return removed;
    }
  }

  shift() {
    if (this.head) {
      let removed = this.head;
      this.head = removed.next;
      this.head ? (this.head.prev = null) : (this.tail = null); // edge case: empty list
      return removed;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    let nextNode = this.head;
    nextNode ? (nextNode.prev = newNode) : (this.tail = newNode); // edge case: empty list
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
    if (this.head) {
      let newNode = new Node(val);
      let prevNode = this.get(idx - 1);
      let nextNode = prevNode.next;
      if (!nextNode) return this.push(val) || true;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      return true;
    }
  }

  remove(idx) {
    if (idx < 0) return false;
    if (idx === 0) return !!this.shift();
    if (this.head) {
      let removed = this.get(idx);
      let prevNode = removed.prev;
      let nextNode = removed.next;
      if (!nextNode) return !!this.pop();
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      return removed;
    }
  }

  reverse() {
    if (!this.head || !this.head.next) return this;
    let nextNode,
      prevNode = null;
    let current = this.head;
    this.tail = current;
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

  getMiddle() {
    // for odd lengths, we'll return the lower middle node
    if (!this.head) return undefined;
    if (!this.head.next) return this.head;
    let mid = this.head;
    let current = this.head.next;
    let count = 2;
    while (current) {
      current = current.next;
      if (current) count++;
      if (count % 2 === 0) mid = mid.next;
    }
    if (count % 2 !== 0) mid = mid.next;
    return mid;
  }
}

test = new DLL();
test.push("d1");
test.push("d2");
test.push("d3");
