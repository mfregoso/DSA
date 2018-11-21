const isPP = str => {
  let table = {};
  for (let s of str) {
    table[s] ? table[s]++ : (table[s] = 1);
  }

  let singleCount = 0;
  for (let s of str) {
    if (table[s] % 2 !== 0) singleCount++;
  }

  if (singleCount === 1 || singleCount === 0) {
    return true;
  } else {
    return false;
  }
};
