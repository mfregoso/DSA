function maxSubarraySum(arr, count) {
  if (!arr || arr.length < count) {
    return null;
  }
  let maxSum = 0;
  // initialize the first sum "window"
  for (let i = 0; i < count; i++) {
    maxSum += arr[i];
  }
  let currSum = maxSum;
  let start = 1;
  while (start <= arr.length - count) {
    let tail = arr[start + count - 1] || 0;
    let head = arr[start - 1];
    currSum = currSum + tail - head;
    maxSum = Math.max(maxSum, currSum);
    start++;
  }
  return maxSum;
}
