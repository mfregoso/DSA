const reverse = str => {
  if (str.length < 1) return "";

  let start = str.slice(-1);
  let remainder = str.substr(0, str.length - 1);

  return start.concat(reverse(remainder));
}

const reverseWith2ndParam = (str, reversed = "") => {
  if (reversed.length === str.length) return reversed;

  const endChar = str[str.length - 1 - reversed.length];

  return reverse(str, reversed.concat(endChar));
};

const reverseWithHelper = str => {
  let result = "";

  const recurseHelper = input => {
    if (input.length === 0) return result;

    result = result.concat(input.slice(-1));

    return recurseHelper(input.substr(0, input.length - 1));
  };

  return recurseHelper(str);
};

console.log(reverse("hello"));
console.log(reverseWithHelper("hello"));
console.log(reverseWith2ndParam("hello"))
