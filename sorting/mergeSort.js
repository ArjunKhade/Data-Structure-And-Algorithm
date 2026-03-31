
let nums = [5,2,3,1];

console.log(mergeSort(nums));

//Time: O(n log n)
//Space: O(n) (because of new arrays)
function mergeSort(arr) {
  //base case   
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  //divide the array in left and right 
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  //merge the left and right recursivly
  return merge(left, right);
}

// merge two sorted array
function merge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
   //copy the remaining element in res from left and right array
  return [...res, ...left.slice(i), ...right.slice(j)];
}
