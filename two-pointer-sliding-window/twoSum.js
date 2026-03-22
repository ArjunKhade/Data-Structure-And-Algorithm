let nums = [2,7,11,15];
let target = 26;

console.log(twoSum(nums,target));
console.log(twoSum1(nums,target));
console.log(twoSum2(nums,target));


//Approach 1 O(n^2)
function twoSum(nums, target){
   let n = nums.length;
   for(let i=0; i<n-1; i++){
    for(let j=i+1; j<n; j++){
        let sum = nums[i]+ nums[j];
        if(sum == target){
            return [i, j];
        }
    }
   }
   return [-1, -1];
}

//Approach 1 O(n)
function twoSum2(nums, target){
  let map = {};
  //store elements in map
  for(let i=0; i<nums.length; i++){
    map[nums[i]]=i;
  }

  for(let i=0; i<nums.length; i++){
    let pairToFind = target-nums[i];
    if(map[pairToFind] && map[pairToFind] != i){
        return [i, map[pairToFind]]; 
    }
  }

  return [-1, -1];
}


// Approach 2: Optimized solution using HashMap (Time Complexity: O(n))
function twoSum1(nums, target){
    // Create an empty map to store number -> index
    let map = {};

    // Loop through the array
    for(let i = 0; i < nums.length; i++){
        
        // Calculate the required number to reach target
        let pairToFind = target - nums[i];

        // Check if the complement already exists in the map
        // (i.e., we have already seen the required pair element)
        if(map[pairToFind] != undefined){
            
            // If found, return indices of complement and current element
            return [map[pairToFind], i];
        }

        // Store the current number and its index in the map
        // so it can be used for future comparisons
        map[nums[i]] = i;
    }

    // If no pair found, return default value
    return [-1, -1];
}