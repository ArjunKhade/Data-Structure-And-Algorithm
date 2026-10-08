
let arr = [4,1,0,10,5];

console.log(linearSearch(arr,10));

function linearSearch(arr, target){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == target) return i;
    }
    return -1;
}