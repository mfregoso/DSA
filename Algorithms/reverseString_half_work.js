const reverser = input => {
  let arrString = input.split("");
  for (let i = 0; i < Math.floor(arrString.length / 2); i++) {
    let start = arrString[i];
    let endIndex = arrString.length - i - 1;
    arrString[i] = arrString[endIndex];
    arrString[endIndex] = start;
  }
  return arrString.join("");
};
console.log(reverser("hello"));
