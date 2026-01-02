function validAnagram(s, t) {
  const map1 = new Map();
  const map2 = new Map();

  for (let ch of s) {
    if (map1.has(ch)) {
      map1.set(ch, map1.get(ch) + 1);
    } else {
      map1.set(ch, 1);
    }
  }
  for (let ch of t) {
    if (map2.has(ch)) {
      map2.set(ch, map2.get(ch) + 1);
    } else {
      map2.set(ch, 1);
    }
  }
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

const s = "racecar", t = "carrace";
console.log(validAnagram(s, t));
