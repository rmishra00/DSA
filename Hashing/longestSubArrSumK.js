function longestsubArrSum(arr, k){
  const map = new Map();
  let sum = 0, longestSubArr = 0, lengthOfSubArr = 0;
  map.set(sum, -1);
  for(let i=0; i<arr.length; i++){
    sum = sum+arr[i];
    if(map.has(sum-k)){
      lengthOfSubArr = i-map.get(sum-k);
      longestSubArr = Math.max(longestSubArr, lengthOfSubArr);
    }
    map.get(sum, i);
  }
return lengthOfSubArr;
}
const arr = [10, 5, 2, 7, 1, -10], k = 15;
console.log(longestsubArrSum(arr,k));