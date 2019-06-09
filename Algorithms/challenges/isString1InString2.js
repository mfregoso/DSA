function isSubsequence(s1, s2) {
  if (s1.length > s2.length) return false;
  let s1Idx = 0;
  let match = false;

  for (let i = 0; i < s2.length && s1Idx < s1.length; i++) {
    if (s2[i] === s1[s1Idx]) {
      match = true;
      s1Idx++;
    } else if (match && s2[i] === s1[0]) {
      s1Idx = 1;
    } else {
      match = false;
      s1Idx = 0;
    }
  }

  return match && s1Idx === s1.length;
}

console.log(isSubsequence("helloooooo", "hello")); // false
console.log(isSubsequence("hello", "helloooo")); // true
console.log(isSubsequence("world", "helloworld")); // true
console.log(isSubsequence("world", "hellowwwwworld")); // true
console.log(isSubsequence("box", "bbbbooxoobo")); // false
console.log(isSubsequence("box", "bbbbooooboxxxxx")); // true
