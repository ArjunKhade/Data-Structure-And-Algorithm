/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
     let map = new Array(26).fill(0);
     let i = 0, j = 0;
     map[s.charCodeAt(0) - 65]++;
     let maxWindow = 0;

     while(j < s.length){
         if(isValidWindow(map, k)){
             maxWindow = Math.max(maxWindow, j-i+1);
             ++j;
             if(j < s.length) map[s.charCodeAt(j) - 65]++;
         } else {
             map[s.charCodeAt(i) - 65]--;
             ++i;
         }
        }
     return maxWindow;
};


var isValidWindow = function(map, k){
  let maxCount = 0;
  let totalCount = 0;

  for(let i=0; i<26; i++){
    totalCount += map[i];
    maxCount = Math.max(maxCount, map[i]);
  } 

  return totalCount - maxCount <= k;

}