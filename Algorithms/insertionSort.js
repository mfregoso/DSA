const insertionSort = arr => {
  if (!arr) return undefined;

  const swap = (i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  };

  for (let chk = 1; chk < arr.length; chk++) {
    for (let i = 0; i < chk; i++) {
      if (arr[i] > arr[chk]) {
        swap(i, chk);
      }
    }
  }

  return arr;
};
