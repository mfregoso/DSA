const binSearch = (target, sortedArr) => {
  if (!target || !sortedArr) return undefined;

  const getMiddle = (start, end) => start + Math.floor((end - start) / 2);

  let start = 0;
  let end = sortedArr.length - 1;
  let middle = getMiddle(start, end);
  while (start < end) {
    if (sortedArr[middle] < target) {
      start = middle + 1;
    } else if (sortedArr[middle] > target) {
      end = middle - 1;
    } else {
      return middle;
    }
    middle = getMiddle(start, end);
  }
  if (sortedArr[middle] === target) return middle;
  return -1;
};
