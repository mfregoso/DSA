for (let i = 1; i < 101; i++) {
  let result = "";
  if (i % 3 === 0) result += "fizz";
  if (i % 5 === 0) result += "buzz";
  console.log(result ? result : i);
}
