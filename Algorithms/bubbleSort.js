const bubbleSort = arr => {
  let swapped = true;
  let end = arr.length;

  const swap = i => {
    let current = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = current;
  };

  while (swapped) {
    swapped = false;
    for (let i = 0; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i);
        swapped = true;
      }
    }
    end--;
  }
  return arr;
};
