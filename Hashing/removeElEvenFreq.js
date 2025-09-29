function deleteElementWithEvenFrequency(arr){
    const set = new Set();
    for(let num of arr){
        if(set.has(num)){
            set.delete(num);
        }else{
            set.add(num);
        }
    }return set;
}
const arr = [10,45,18,9,9,10,45,10,10];
console.log(deleteElementWithEvenFrequency(arr));
