/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // i marks the start of the current sliding window.
    let i = 0;

    // Stores the latest index where each character was seen.
    let map = {};
    let maxWS = 0;

    for(let j=0; j<s.length; j++){
      // If the character already exists inside the current window,
      // move the start just after its previous occurrence.
      if(map[s[j]] != undefined && map[s[j]]>=i){
        i = map[s[j]] + 1;
      }

      // Update the latest position of the current character.
      map[s[j]] = j;

      // Current window size = right pointer - left pointer + 1.
      let currWS = j-i+1;
      maxWS = Math.max(currWS, maxWS);

    }
    return maxWS;
};
