function threeSum(arr) {
  arr.sort((a, b) => a - b);
  const res = [];
  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let j = i + 1, k = arr.length - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        res.push([arr[i], arr[j], arr[k]]);
        j++, k--;
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
      }
    }
  }
  return res;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
