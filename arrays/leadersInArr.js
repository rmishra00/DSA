class Solution {
    leaders(a) {
        // code here
        let maxRight = a[a.length-1];
        let result = [];
        result.push(maxRight);
        for(let i=a.length-2; i>=0; i--){
            if(a[i]>=maxRight){
                maxRight = a[i];
                result.push(a[i]);
            }
        }
        
        return result.reverse();
    }
    
}