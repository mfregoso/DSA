function sameFrequency(int1, int2) {
  const nums1 = int1.toString().split("");
  const nums2 = int2.toString().split("");
  if (nums1.length !== nums2.length) {
    return false;
  }
  const count1 = {};
  const count2 = {};
  for (let num of nums1) {
    count1[num] ? count1[num]++ : (count1[num] = 1);
  }
  for (let num of nums2) {
    count2[num] ? count2[num]++ : (count2[num] = 1);
  }
  const keys = Object.keys(count1);
  for (let num in keys) {
    if (count1[num] !== count2[num]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
