
function remDuplicate(arr) {
  const set = new Set(arr);
  return Array.from(set);
}

const arr = [2, 2, 3, 3, 7, 5];
console.log(remDuplicate(arr));
