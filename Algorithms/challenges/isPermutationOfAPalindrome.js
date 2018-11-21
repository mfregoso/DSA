const isPP = str => {
  let table = {};
  for (let s of str) {
    table[s] ? table[s]++ : (table[s] = 1);
  }

  let oddCount = 0;
  let keys = Object.keys(table);
  for (let s of keys) {
    if (table[s] % 2 !== 0) oddCount++;
  }

  if (oddCount === 1 || oddCount === 0) {
    return true;
  } else {
    return false;
  }
};
