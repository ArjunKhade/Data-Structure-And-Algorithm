// write the function which returnd the largest number in an array

let arr = [5, 0, 7, 10, 8, 17, 1];

console.log(findLargest(arr));

function findLargest(){
    let largest = -Infinity; // assing largest to -Infinity least number in js
    for(let i = 0; i< arr.length; i++){
        //check if current element if greater than largest
        if(arr[i]> largest){
            largest = arr[i];
        }
    }
    //return the result
    return largest;
}