

let nums = [2,3,5,6,8,2,2,5,2];

console.log(removeElement(nums,2));

function removeElement(nums, val){
    let x = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != val){
            nums[x]= nums[i];
            x++;
        }
    }
    return x;
}