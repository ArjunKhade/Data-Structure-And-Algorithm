const nums1 = [1,2,3,0,0,0]
let m = 3; 
const nums2 = [2,5,6]
let n = 3;

// mergeSortedArray(nums1,m,nums2,n);
mergeSortedArray1(nums1,m,nums2,n)
console.log(nums1);


function mergeSortedArray(nums1,m,nums2,n) {
    //Copy valid elements of nums1
    let nums1Copy = nums1.slice(0,m);
    //Create two pointers
    let p1 = 0;
    let p2 = 0;

    //Final merged array length = m + n.
    for(let i=0; i< m+n; i++){
        //nums2 is finished or current element in nums1Copy is smaller
       if( p2>=n || (p1<m && (nums1Copy[p1] < nums2[p2]))){
        //Place element into nums1 and move pointer.
         nums1[i]=nums1Copy[p1];
         p1++;
       }else{
        //Take from nums2
        nums1[i]=nums2[p2];
        p2++;
       }
    }
}

//Approch 2 (in place)

function mergeSortedArray1(nums1, m, nums2, n){

   // Pointer for the last valid element in nums1 and nums2
   let p1 = m - 1;
   let p2 = n - 1;

   // Start filling nums1 from the last index
   for(let i = m + n - 1; i >= 0; i--){

      // If all elements of nums2 are already placed, stop
      if(p2 < 0) break;

      // Compare elements from the end of nums1 and nums2
      // Place the larger element at the current index i
      if(p1 >= 0 && nums1[p1] > nums2[p2]){
         
         // Move element from nums1 to position i
         nums1[i] = nums1[p1];

         // Move nums1 pointer backward
         p1--;

      }else{

         // Move element from nums2 to position i
         nums1[i] = nums2[p2];

         // Move nums2 pointer backward
         p2--;
      }
   }
}






