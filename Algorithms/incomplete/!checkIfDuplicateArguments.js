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
    // condense above into one line (via Colt)
    // collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  return false;
}

console.log(test(2, 3, 4, 5));
// NOT perfect because 3 = "3" due to object keys using strings

// AUTHOR: TWO POINTERS
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
