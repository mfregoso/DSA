const rot13 = str => {
  const decoded = [];

  const convert = s => {
    const upperCase = /[A-Z]/.test(s);
    const limit = upperCase ? 64 : 96;
    const code = s.charCodeAt(0) - 13;
    return String.fromCharCode(code <= limit ? code + 26 : code);
  }

  for (let s of str) {
    decoded.push(/[A-Z,a-z]/.test(s) ? convert(s) : s);
  }

  return decoded.join("");
}

console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("#serr cvMMN??")); // #free piZZA??
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
