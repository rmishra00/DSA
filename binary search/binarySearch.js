  function search(nums, target) {
        let s = 0, e = nums.length-1;
        while(s<=e){
            let mid = Math.floor(((s+e)-1)/2);
            console.log("mid", mid)
            if(target < nums[mid]){
                e = mid-1;
            }else if(target > nums[mid]){
                s = mid+1;
            }else{
                return mid;
            }
            s++;e--;
        }
    return -1;

    }
const nums=[-1,0,2,4,6,8];
const target=4;
console.log(search(nums, target));