function sameFrequency(int1, int2) {
  const nums1 = int1.toString().split("");
  const nums2 = int2.toString().split("");
  if (nums1.length !== nums2.length) return false;
  
  const count1 = {};

  for (let num of nums1) {
    count1[num] ? count1[num]++ : (count1[num] = 1);
  }

  for (let num of nums2) {
    if (count1[num] > 0) {
      count1[num]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(182, 2811));// false
console.log(sameFrequency(2, 2));     // true
console.log(sameFrequency(22, 20));   // false
console.log(sameFrequency(200, 201)); // false
