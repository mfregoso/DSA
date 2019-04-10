class ArrayList {
  constructor(length = 0) {
      this.length = length;
      if (length) {
          for (let i = 0; i < this.length; i++) {
              this[i] = null;
          }
      }
  }

  push(val) {
      this[this.length] = val;
      ++this.length;
      return this;
  }

  pop() {
      if (this.length) {
          const endIndex = this.length - 1;
          delete this[endIndex];
          --this.length;
      }
      return this;
  }

  unshift(val) {
      for (let i = this.length; i > 0; i--) {
          this[i] = this[i-1];
      }
      this[0] = val;
      ++this.length;
      return this;

  }

  shift() {
      if (this.length) {
          for (let i = 0; i < this.length - 1; i++) {
          this[i] = this[i+1];
          }
          delete this[this.length - 1];
          --this.length;
      }
      return this;
  }

  map(func) {
      const mAL = new ArrayList(this.length);
      for (let i = 0; i < this.length; i++) {
          mAL[i] = func(this[i], i);
      }
      return mAL;
  }

  fill(val) {
      for (let i = 0; i < this.length; i++) {
          this[i] = val;
      }
      return this;
  }
}

const test = new ArrayList();
test.push(1)
test.push(2)
test.push(3)
// const mapped = new ArrayList(4).fill(3).map((item, idx) => item + idx);