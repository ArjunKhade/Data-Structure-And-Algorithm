
let nums = [1,2,2];

console.log(singleNumberUsingXOR(nums));
console.log(singleNumber(nums));


//Approach 1
function singleNumber(nums) {
 // Object used as a hashmap to store frequency
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
     // If number is not present in hashmap
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;// initialize count
    } else {
      hash[nums[i]]++;// increase count
    }
  }

   // Loop again to find element with frequency 1
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) { 
      return nums[i]; // return single occurring element
    }
  }
}

//Approach 2
function singleNumberUsingXOR(nums) {
    let xor = 0; //same 0
    for(let i=0; i<nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
};
