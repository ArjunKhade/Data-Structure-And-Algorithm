const arr = [1, [2,3,[4,5]]];
//[1,2,3,4,5]

// console.log(arr.flat(Infinity));
console.log(flatNestedArray(arr));

function flatNestedArray(arr){
  let result = [];
  
  for(let i in arr){
    if(Array.isArray(arr[i])){
        result.push(...flatNestedArray(arr[i]));
    }else{
        result.push(arr[i]);
    }
  }
   return result;
}