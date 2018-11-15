function averagePair(arr, avg) {
  if (arr.length < 2) {
    return false;
  }
  let table = {};
  for (let val of arr) {
    let target = 2 * avg - val;
    if (table[target]) {
      return true;
    }
    table[val] = true;
  }
  return false;
}

console.log(averagePair([-2, 0, 2, 3, 4, 6, 10, 20], 2.5));
