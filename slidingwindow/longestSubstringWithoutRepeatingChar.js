
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0, left = 0, right = 0;
    const newMap = new Map();
    for( right=0; right<s.length; right++){
        if(newMap.has(s[right])&&newMap.get(s[right])>=left){
            left = newMap.get(s[right])+1
        }
        maxLen = Math.max(maxLen, right-left+1);
        newMap.set(s[right], right);
    }
    return maxLen;
};