

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElementOpt([4, 1, 2], [1, 3, 4, 2]));


function nextGreaterElement(nums1, arr) {
  let ngeMap = {};
  let stack = [];
  let n = arr.length;

  stack.push(arr[n - 1]);
  ngeMap[arr[n - 1]] = -1;
  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (arr[i] < top) {
      ngeMap[arr[i]] = top;
    } else {
      while (stack.length) {
        if (stack[stack.length - 1] < arr[i]) {
          stack.pop();
        } else {
          ngeMap[arr[i]] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) {
        ngeMap[arr[i]] = -1;
      }
    }
    stack.push(arr[i]);
  }
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(ngeMap[nums1[i]]);
  }
  return ans;
}

//optimized 
function nextGreaterElementOpt (nums1, nums2) {

    let ngeMap = new Map();   // better than object (safer for keys)
    let stack = [];

    // Traverse from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {

        // Remove all smaller or equal elements
        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        // If stack empty → no greater element
        // Else → top of stack is next greater
        ngeMap.set(
            nums2[i],
            stack.length ? stack[stack.length - 1] : -1
        );

        // Push current element
        stack.push(nums2[i]);
    }

    // Build result
    return nums1.map(num => ngeMap.get(num));
};