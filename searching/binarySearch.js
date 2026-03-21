let nums = [1, 5, 6, 7, 8, 9];

console.log(binarySearch(nums, 9));

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    //calc middle
    let mid = left + Math.floor((right - left) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
