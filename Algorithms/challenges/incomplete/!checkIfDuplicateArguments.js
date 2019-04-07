function anyDupes(...args) {
  if (args.length < 2) {
    return false;
  }
  let table = new Map();
  for (let val of args) {
    if (table.get(val)) {
      return true;
    }
    table.set(val, true);
  }
  return false;
}

console.log(anyDupes(2, 3, 4, 4, 5));

function anyDuplicates(...args) {
  if (args.length < 2) {
    return false;
  }
  let table = {};
  for (let val of args) {
    if (table[val]) {
      return true;
    }
    table[val] = true;
    // condense above into one line
    // collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  return false;
}

console.log(anyDuplicates(2, 3, 4, 5));

// AUTHOR: TWO POINTERS
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let scout = 1;
  while (scout < args.length) {
    if (args[start] === args[scout]) {
      return true;
    }
    start++;
    scout++;
  }
  return false;
}
