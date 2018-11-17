const bubbleSort = arr => {
  let swapped = true;

  const swap = i => {
    let current = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = current;
    swapped = true;
  };

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) swap(i);
    }
  }
  return arr;
};
