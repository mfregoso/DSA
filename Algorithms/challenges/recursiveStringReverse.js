const reverse = str => {
  if (!str || typeof str !== "string") throw new Error("Not a string");

  let result = "";

  const recurse = input => {
    let length = input.length;
    if (length < 1) {
      return result;
    }

    let slice = input.substr(-1);
    result += slice;

    return recurse(input.substr(0, --length));
  };

  return recurse(str);
};

reverse("hello");
