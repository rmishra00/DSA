function checkPangram(s) {
  s = s.toLowerCase();
  const set = new Set();

  for (let ch of s) {
    if (ch >= 'a' && ch <= 'z') {
      set.add(ch);
    }
  }
  if (set.size === 26) {
    return true;
  }
  return false;
}  
const s = "Bawds jog, flick quartz, vex nymph";
console.log(checkPangram(s));
