// Q Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


function intersectionOfArrDuplicates(arr1, arr2){
    const map = new Map();
    for(let num of arr1){
        map.set(num, (map.get(num)||0)+1);
    }
    const newArr = [];
    for(let num of arr2){
        if(map.get(num)>0){
            newArr.push(num);
            map.set(num, map.get(num)-1)
        }
    }
    console.log(map);
    return newArr;
}

// const arr1 = [1,2,2,1], arr2 = [2,2];
const arr1 = [4,9,5], arr2 = [9,4,9,8,4]

console.log(intersectionOfArrDuplicates(arr1, arr2));