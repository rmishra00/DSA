function maxSubArrSum(arr) {
  let currSum = 0, maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    maxSum = Math.max(currSum, maxSum);
    if (currSum < 0) {
      currSum = 0
    }
  }
  return maxSum;
}

const arr = [2, -4, 5, 4, -1, 7, -8];
console.log(maxSubArrSum(arr));
