function productOfArrExceptSelf(arr) {
  const ans = [];
  ans[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    ans[i] = nums[i - 1] * ans[i + 1];
  }
  let suffix = 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    suffix = suffix * arr[i + 1];
    ans[i] = suffix * ans[i];
  }
  return ans;
}

const arr = [1, 2, 3, 4];
console.log(productOfArrExceptSelf(arr));
