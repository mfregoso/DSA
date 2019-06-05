function isSubseddddquence(s1, s2) {
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

function isSubsequence(s1, s2) {
  let s1Idx = 0;
  let match = false;

  for (let i = 0; i < s2.length && s1Idx < s1.length; i++) {
    if (s2[i] === s1[s1Idx]) {
      match = true;
      s1Idx++;
    } else if (s2[i] === s1[0]) {
      i--;
      s1Idx = 0;
    } else {
      match = false;
      s1Idx = 0;
    }
  }

  return match;
}

console.log(isSubsequence("hello", "helloooo")); // true
console.log(isSubsequence("world", "helloworld")); // true
console.log(isSubsequence("world", "hellowwwwworld")); // true
