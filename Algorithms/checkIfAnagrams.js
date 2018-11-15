const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const index = {};
  let same = true;

  const charCode = str => str.charCodeAt(0);

  for (let char of str1) {
    let num = charCode(char);
    index[num] ? index[num]++ : (index[num] = 1);
  }
  for (let char of str2) {
    let sq = charCode(char);
    index[sq] > 0 ? index[sq]-- : (same = false);
  }
  return same;
};

console.log(isAnagram("raceee", "aceeer"));
