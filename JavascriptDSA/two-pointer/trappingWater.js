/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {

    let n = arr.length;

    // maxL[i] stores the tallest bar from the left up to index i.
    // maxR[i] stores the tallest bar from the right up to index i.
    let maxL=[];
    let maxR=[];

    // First and last bars are the starting boundaries for each side.
    maxL[0] = arr[0];
    maxR[n-1] = arr[n-1];

    // Build left max from the start and right max from the end in one pass.
    for(let i=1; i<n; i++){
      maxL[i] = Math.max(maxL[i-1], arr[i]);
      maxR[n-1-i]= Math.max(arr[n-1-i], maxR[n-i])
    }

    let ans = 0;
    for(let i=0; i<n; i++){
        // Water at index i depends on the shorter boundary around it.
        let waterTrapped = Math.min(maxL[i],maxR[i])-arr[i];
        ans = ans+Math.max(waterTrapped, 0)
    }

    return ans;
};


