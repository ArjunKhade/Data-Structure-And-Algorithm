//Given a 1-indexed array of integers numbers that is already sorted 
// in non-decreasing order, find two numbers such that they add up to 
// a specific target number. 

let numbers = [2,7,11,15];
let target = 9


console.log(twoSum(numbers,target));

//O(n) space O(1)
function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length-1;
  
  while(i<j){
    let sum = numbers[i]+ numbers[j];

    if(sum > target){
        --j;
    }else if(sum < target){
        ++i;
    }else{
        return [i+1, j+1];
    }

  }
}