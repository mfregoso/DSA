const reverse = str => {
  if (typeof str !== "string") throw new Error("Not a string");

  let result = "";

  const recurse = input => {
    let length = input.length;
    if (length < 1) {
      return result;
    }

    let slice = input.substr(-1);
    result = result.concat(slice);

    return recurse(input.substr(0, --length));
  };

  return recurse(str);
};

reverse("hello");
