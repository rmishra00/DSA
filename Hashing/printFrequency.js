function printFrequency(arr){
    const map = new Map();
    for(let num of arr){
        map.set(num, (map.get(num)||0)+1)
    }
    return map;
}
const arr =[10,1,3,4,5,10,1,6,7,7];
console.log(printFrequency(arr));