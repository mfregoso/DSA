const deDupe = arr => {
  const table = {};

  for (let i = 0; i < arr.length; i++) {
    if (table[arr[i]]) {
      arr.splice(i--, 1);
    }
    table[arr[i]] = true;
  }

  return arr;
};

console.log(deDupe([2, 3, 3, 4, 6, 10, 6, 14])); // [ 2, 3, 4, 6, 10, 14 ]
console.log(deDupe([2, 2, 3, 3, 2])); // [2, 3]
