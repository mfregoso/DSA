// sorted arrays, no duplicates
let arr1 = [13, 27, 35, 40, 49, 55, 59, 77, 80, 81];
let arr2 = [17, 35, 39, 40, 55, 58, 60, 70, 75, 77];

const objMap = (arr1, arr2) => {
  let table = {};
  arr1.forEach(item => (table[item] = true));
  let matches = [];
  arr2.forEach(item => (table[item] ? matches.push(item) : null));
  return matches;
};

const hashMap = (arr1, arr2) => {
  let table = new Map();
  arr1.forEach(item => table.set(item, true));
  let matches = [];
  arr2.forEach(item => (table.get(item) ? matches.push(item) : null));
  return matches;
};

const simulWalk = (arr1, arr2) => {
  let matches = [];
  let base = 0;
  let scout = 0;
  while (base < arr1.length && scout < arr2.length) {
    if (arr2[scout] === arr1[base]) {
      matches.push(arr2[scout]);
      base++;
      scout++;
    } else if (arr2[scout] > arr1[base]) {
      base++;
    } else if (arr2[scout] < arr1[base]) {
      scout++;
    }
  }
  return matches;
};
