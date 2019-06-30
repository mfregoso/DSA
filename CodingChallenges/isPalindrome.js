const isPalindrome = str => {
  const halfway = Math.floor(str.length / 2);
  const lowered = str.toLowerCase();

  for (let i = 0; i <= halfway; i++) {
    const oppositeStr = lowered[str.length - 1 - i];
    if (lowered[i] !== oppositeStr) return false;
  }

  return true;
};

console.log(isPalindrome("stats")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("wooww")); // false
