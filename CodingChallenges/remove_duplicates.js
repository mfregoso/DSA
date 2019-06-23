const deDupe = arr => {
  const table = {};
  const unique = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!table[arr[i]]) {
      unique.push(arr[i]);
    }
    table[arr[i]] = true;
  }
  return unique;
};

console.log(deDupe([2, 3, 3, 4, 6, 10, 6, 14])); // [ 2, 3, 4, 6, 10, 14 ]
console.log(deDupe([2, 2, 3, 3, 2])); // [2, 3]
