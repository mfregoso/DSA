const isPP = str => {
  let table = {};
  for (let s of str) {
    table[s] ? table[s]++ : (table[s] = 1);
  }

  let oddCount = 0;
  for (let s of str) {
    if (table[s] % 2 !== 0) oddCount++;
  }

  if (oddCount === 1 || oddCount === 0) {
    return true;
  } else {
    return false;
  }
};
