function rotateArr(arr, d) {
  d = d % arr.length;
  const subArr = arr.splice(0, d);
  return arr.push(...subArr);
}

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3;
console.log(arr, d);
