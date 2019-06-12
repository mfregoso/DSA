const rot13 = str => {
  str = str.toUpperCase();
  const decoded = [];

  for (let s of str) {
    const code = s.charCodeAt(0) - 13;
    const dcStr = String.fromCharCode(code <= 64 ? code + 26 : code);
    decoded.push(/[A-Z]/.test(s) ? dcStr : s);
  }

  return decoded.join("");
}

console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
