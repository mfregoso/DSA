function isSubsequence(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let table = {};
  s2.forEach((val, idx) => {
    table[val] ? table[val].push(idx) : (table[val] = [idx]);
  });
  console.log(table);
  let location = -1;
  let match = 0;
  for (let str of s1) {
    if (table[str][0] > location) {
      console.log("match!" + s2[table[str][0]]);
      match++;
      location = table[str][0];
      table[str].shift();
    } else if (table[str][0] < location) {
      return false;
    }
  }
  console.log(match);
  return s1.length === match;
}

console.log(isSubsequence("hello", "helloooo"));
