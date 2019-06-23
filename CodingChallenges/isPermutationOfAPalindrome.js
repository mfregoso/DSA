const isPP = str => {
  const table = {};

  for (let s of str) {
    table[s] ? table[s]++ : (table[s] = 1);
  }

  let oddCount = 0;
  const keyCounts = Object.values(table);

  for (let keyCount of keyCounts) {
    if (keyCount % 2 !== 0) oddCount++;
  }

  return oddCount <= 1 ? true : false;
};

console.log(isPP("box")); // false
console.log(isPP("caracer")); // true
console.log(isPP("racecar")); // true
console.log(isPP("bbbbo")); // true
console.log(isPP("bobb")); // false
console.log(isPP("bobbo")); // true
