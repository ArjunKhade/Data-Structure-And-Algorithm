

let nums = [3,0,1];

console.log(missingNumber(nums));

function missingNumber(nums) {
    // length of array
    let n = nums.length;

    // expected sum of numbers from 0 to n
    let sum = n * (n + 1) / 2;

    // actual sum of elements in array
    let partialSum = 0;

    for (let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i];
    }

    // missing number
    return sum - partialSum;
}