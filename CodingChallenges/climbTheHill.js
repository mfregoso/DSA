function climbTheHill(slope) {
  // EITHER increasing OR decreasing, but both allow flat slopes (which would be the minimum move)
  let changes = 0;
  let increasing;
  if (slope.length === 1) {
    return changes;
  }
  for (let i = 1; i < slope.length; i++) {
    if (increasing === undefined) {
      if (slope[i] > slope[i - 1]) {
        increasing = true;
        console.log("increasing!");
      } else if (slope[i] < slope[i - 1]) {
        increasing = false;
        console.log("decreasing!");
      }
    }
    if (increasing === true) {
      if (slope[i] < slope[i - 1]) {
        let change = Math.abs(slope[i] - slope[i - 1]);
        slope[i] = slope[i - 1]; // necessary "trick" for the next loop to correctly continue the desire slope (i.e. change current element value)
        changes += change;
      }
    } else if (increasing === false) {
      if (slope[i] > slope[i - 1]) {
        let change = Math.abs(slope[i] - slope[i - 1]);
        slope[i] = slope[i - 1];
        changes += change;
      }
    }
  }
  return changes;
}
let inputs = [1, 4, 3, 2, 3, 1];
let ans = climbTheHill(inputs);
console.log("total changes: " + ans);
