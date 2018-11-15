class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  loopAll() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  traverse() {
    this.current = this.current || this.head;
    let initial = this.current;
    if (this.current) {
      this.current = this.current.next;
    }
    return initial;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
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
      this.tail = prevNode;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }

  shift() {
    if (this.head) {
      let start = this.head;
      this.head = this.head.next;
      this.length--;
      if (!this.head) {
        this.tail = null;
      }
      return start;
    }
  }

  unshift(val) {
    // insert node at beginning
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (!this.tail) this.tail = newNode;
    return this;
  }

  get(idx) {
    //if (!this.head) return undefined;
    if (idx < 0 || idx >= this.length) return undefined;
    let i = 0;
    let current = this.head;
    while (i !== idx) {
      current = current.next;
      i++;
    }
    return current;
  }

  set(idx, val) {
    let current = this.get(idx);
    if (!current) return false;
    current.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift(); // !! forces boolean type
    if (idx === this.length - 1) return this.pop();

    let prevNode = this.get(idx - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    if (!this.head || !this.head.next) return this;
    let nextNode,
      prevNode = null;
    let current = this.head;
    this.tail = current;
    while (current) {
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }
    this.head = prevNode; // at this point, reached end, so current = null
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

test = new SLL();
test.push("s1");
test.push("s2");
test.push("s3");
