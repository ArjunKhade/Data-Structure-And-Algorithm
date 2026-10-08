// write the function which returnd the smallest number in an array

let arr = [5, 0, 7, 10, 8, 17, 1];

console.log(findSmallest(arr));

function findSmallest(){
    let smallest = Infinity; // assing largest to -Infinity Largest number in js
    for(let i = 0; i< arr.length; i++){
        //check if current element if greater than largest
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    //return the result
    return smallest;
}