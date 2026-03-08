const nums1 = [1,2,3,0,0,0]
let m = 3; 
const nums2 = [2,5,6]
let n = 3;

mergeSortedArray(nums1,m,nums2,n);
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