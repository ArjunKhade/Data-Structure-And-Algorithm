
let nums = [1,1,0,1,1,1,,0,1];

console.log(findMaxConsecutiveOnes(nums));

function findMaxConsecutiveOnes(nums){
    let currCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
         // If current element is 1
        if(nums[i] == 1){
            currCount++;// Increase current consecutive count
        }else{
            // update maxCount with the maximum value
            maxCount = Math.max(currCount, maxCount);
            // Reset current count because sequence broke
            currCount = 0;
        }
        
    }
    // After loop ends, we check once more because
    // the array might end with consecutive 1s
    return Math.max(currCount, maxCount);
}