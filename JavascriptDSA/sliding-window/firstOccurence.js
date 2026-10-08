
let haystack =  "sadbutsad";
let needle =  "sad";

console.log(firstOccurence(haystack,needle));

function firstOccurence(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  // Loop through haystack till a point where needle can fully fit
  for (let i = 0; i <= n - m; i++) {
    let j = 0; // j is used to compare characters of needle
    for (j = 0; j < m; j++) {
      // If characters do not match, break out of inner loop
      if (haystack[i + j] != needle[j]) break;
    }
     // If we completed full loop of needle (all characters matched)
    if (j == m) {
      return i;
    }
  }

  return -1;
}
