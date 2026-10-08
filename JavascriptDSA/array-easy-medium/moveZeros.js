
let nums = [0,1,0,3,12];

moveZeroes(nums);

console.log(nums);


function moveZeroes(nums){
    // Pointer to track the position where next non-zero element should go
    let x = 0;

    for(let i=0; i<nums.length; i++){
        // Check if current element is not zero
        if(nums[i] != 0){
             // Place the non-zero element at index x
            nums[x] = nums[i];
             // Move pointer forward
            x++;
        }
    }

    // After moving all non-zero elements,
    // fill the remaining positions with 0
    for (let i = x; i < nums.length; i++) {
        nums[i]=0;
    }
}