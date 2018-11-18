const selectionSort = arr => {
  const swap = (i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  };

  for (let st = 0; st < arr.length - 1; st++) {
    let minIdx = st;
    for (let i = st + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIdx]) minIdx = i;
    }
    if (st !== minIdx) swap(st, minIdx);
  }
  return arr;
};
