const reverse = (str, reversed = "") => {
  if (reversed.length === str.length) return reversed;

  const endChar = str[str.length - 1 - reversed.length];

  return reverse(str, reversed.concat(endChar));
};

const reverseHelper = str => {
  let result = "";

  const recurseHelper = input => {
    if (input.length === 0) return result;

    result = result.concat(input.slice(-1));

    return recurseHelper(input.substr(0, input.length - 1));
  };

  return recurseHelper(str);
};

console.log(reverseHelper("hello"));
console.log(reverse("hello"));
