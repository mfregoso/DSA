const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const index = {};
  let isSquare = true;

  for (let nbr of arr1) {
    let num = nbr ** 2;
    index[num] ? index[num]++ : (index[num] = 1);
  }

  for (let sq of arr2) {
    index[sq] > 0 ? index[sq]-- : (isSquare = false);
  }

  return isSquare;
};

console.log(same([2, 3, 3], [9, 4, 4])); // false
console.log(same([2, 3, 3], [9, 9, 4])); // true
