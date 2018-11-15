const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const index = {};
  let same = true;
  for (let nbr of arr1) {
    let num = nbr ** 2;
    index[num] ? index[num]++ : (index[num] = 1);
  }
  for (let sq of arr2) {
    index[sq] > 0 ? index[sq]-- : (same = false);
    // if (index[sq] > 0) {
    //  index[sq]--;
    // } else {
    //   same = false;
    // }
  }
  return same;
};

console.log(same([2, 3, 3], [9, 4, 4]));
