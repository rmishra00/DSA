//Q: Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both the arrays. The intersection should not have duplicate elements and the result should contain items in any order.


function intersect(a, b) {
  const set = new Set(a);
  const intersectionElement = [];
  for (let num of b) {
    if (set.has(num)) {
      if (!intersectionElement.includes(num)) {
        intersectionElement.push(num);
      }
    }
  }
  return intersectionElement;
}

const  a = [1, 2, 1, 3, 1], b = [3, 1, 3, 4, 1];
const ans = intersect(a,b);
console.log(ans);