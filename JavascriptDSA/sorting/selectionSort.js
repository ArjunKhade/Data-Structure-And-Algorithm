
let arr = [4, 5, 1, 3, 9];

console.log(selectionSort(arr));

function selectionSort(arr){
   let n = arr.length;
  
   for(let i=0; i<n-1; i++){
    let min = i;
    for(let j=i+1; j<n; j++){
        if( arr[j] < arr[min]){
            min = j;
        }
    }
    if(min != i){
        //swap
      let temp = arr[min];
      arr[min]= arr[i];
      arr[i]= temp;  
    }
   }
   return arr;
}