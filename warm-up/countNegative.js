// write the function which return number of negative numbers in array

let arr = [2, -5, -9, -6 , 8, -7];

console.log(countNegative(arr));

function countNegative(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        //check if number is negative then increase count;
        if(arr[i] < 0)
            count++;
    }
    // return the result of count 
    return count;
}