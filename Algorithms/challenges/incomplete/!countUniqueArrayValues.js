// O(N) SOLUTION
const countUniqueValues = (arr) => {
  let unique = 0;
  let map = new Map();
  for (let value of arr) {
    if (map.get(value)) continue;
    map.set(value, true);
    unique++;
  }
  return unique;
}

countUniqueValues([2, 3, 4, 5, 5, 6]);

// TWO POINTER SOLUTION ** BROKEN **

const uniqueValues = arr => {
  if (arr.length <= 1) {
    return arr.length;
  }
  let start = 0;
  for (let c = 0; c < arr.length; c++) {
    if (arr[start] !== arr[c]) {
      if (start === 0) {
        arr[c] = 1;
        start = c;
      } else {
        arr[c] = arr[start] + 1;
        start = c;
      }
    }
  }
  if (start === 0) {
    return 1;
  } else {
    return arr[start];
  }
};
