//Q:Given an unsorted array arr[] of integers, find the number of subarrays whose sum exactly equal to a given number k.

function cntSubarrays(arr, k) {
  const map = new Map();
  let count = 0, sum = 0;
  map.set(sum, 1);
  for (let num of arr) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
const arr = [10, 2, -2, -20, 10], k = -10;
console.log(cntSubarrays);