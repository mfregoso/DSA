const rot13 = (str, decoding) => {
  const solution = [];

  const convert = s => {
    const upperCase = /[A-Z]/.test(s);
    const limit = upperCase ? decoding ? 64: 91 : decoding ? 96 : 122;
    const code = s.charCodeAt(0) + (decoding ? -13 : 13);
    if (decoding) return String.fromCharCode(code <= limit ? code + 26 : code);
    return String.fromCharCode(code >= limit ? code - 26 : code);
    
  }

  for (let s of str) {
    solution.push(/[A-Z,a-z]/.test(s) ? convert(s) : s);
  }

  return solution.join("");
}

const encode = (str) => rot13(str);
const decode = (str) => rot13(str, true);

const encoded = encode("FREE PIZZA!");
console.log(decode(encoded)); // FREE PIZZA!
console.log(decode("#serr cvMMN??")); // #free piZZA??
console.log(decode("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
