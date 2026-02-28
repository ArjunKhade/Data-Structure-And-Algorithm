// write the function which return -1 if the element not found
// returns index of array if element is found

let arr = [4,2,0,10,8,30];
console.log(searchElement(arr, 25));

function searchElement(arr, x){
  // loop through the each element of array
  for (let i = 0; i < arr.length; i++) {
    // check if element is present then return index
    if(arr[i] == x){
        return i;
    }
  }
  //if element is not present return -1
  return -1; 
}

