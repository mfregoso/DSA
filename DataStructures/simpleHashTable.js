class Table {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    let _prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * _prime + value) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) this.table[index] = [];
    this.table[index].push([key, value]);
    return this.table[index];
  }

  get(key) {
    let index = this.hash(key);
    let hashData = this.table[index];
    if (!hashData) return undefined;
    for (let keyVal of hashData) {
      if (keyVal[0] === key) return keyVal[1];
    }
  }

  keys() {
    let keys = [];
    let unique = {}; // keys = strings, so OK
    for (let hashData of this.table) {
      if (hashData) {
        for (let key of hashData) {
          if (!unique[key[0]]) keys.push(key[0]);
          unique[key[0]] = true;
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    let unique = {}; // imperfect solution because 42 = "42"
    for (let hashData of this.table) {
      if (hashData) {
        for (let key of hashData) {
          if (!unique[key[1]]) values.push(key[1]);
          unique[key[1]] = true;
        }
      }
    }
    return values;
  }

  valuesIncludingDuplicates() {
    let values = [];
    for (let hashData of this.table) {
      if (hashData) {
        for (let key of hashData) {
          values.push(key[1]);
        }
      }
    }
    return values;
  }
}

let tbl = new Table();
tbl.set("hd", 42); // idx = 40
tbl.set("hd", 4422); // does not overwrite original * can never be retrieved
tbl.set("hello", 400); // idx = 40 **COLLISION**
tbl.set("a", 10); // idx = 1
tbl.set("dupeValue", 400); // **duplicate value**
tbl.set("another", "400"); // **duplicate value**
