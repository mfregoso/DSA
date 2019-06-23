const flattenArr = arr => {
  if (!arr.length) return [];
  
  const first = arr[0];
  const flat = Array.isArray(first) ? flattenArr(first) : [first];
  return flat.concat(flattenArr(arr.slice(1)));
}

const test = [0,[1],[2,[3,4]],5];
console.log(flattenArr(test)) //[0, 1, 2, 3, 4, 5]