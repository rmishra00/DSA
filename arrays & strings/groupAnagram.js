class Solution {
    anagrams(arr) {
        const nMap = new Map();
        // code here
        for(let i=0; i<arr.length; i++){
            let word = arr[i];
            let sortedWord = word.split('').sort().join('');
            if(nMap.has(sortedWord)){
                let existing = nMap.get(sortedWord);
                existing.push(word);
            }else{
                nMap.set(sortedWord, [word]);
            }
        }
        return [...nMap.values()];
    }
}