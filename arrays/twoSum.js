function twoSum(arr, target) {
  const arrayOfIndices = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      arrayOfIndices.push(map.get(target - nums[i]), i);
    } else {
      map.set(nums[i], i);
    }
  }
  return arrayOfIndices;
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(twoSum);
