

let arr = [12, 45, 67, 89, 45, 67, 23, 90, 88 ];


console.log(secondLargest(arr));

function secondLargest(arr){
    //if array has length less than 2 return null
    if(arr.length<2) return null;
    
    //initial values of largest and secondlargest
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        // if current element is greater than largest 
        if(arr[i]> largest){
            secondLargest =largest;
            largest= arr[i];
        }
        // if current element is greater than secondLargest and not equal to largest
        else if(arr[i]> secondLargest && arr[i] != largest){
            secondLargest = arr[i];
        }
        
    }

    return secondLargest;
}