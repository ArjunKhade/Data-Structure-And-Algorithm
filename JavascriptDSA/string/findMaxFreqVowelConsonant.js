let s = "successes";
// Output: 6  e-2 , s-4

console.log(findMaxFreqVowelConsonant(s));

function findMaxFreqVowelConsonant(s) {
  let map = {};
  // add freq of each 
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? ++map[s[i]] : map[s[i]] = 1;
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let keys = Object.keys(map);
  let maxVowels = 0;
  let maxConsonant = 0;
  //check if freq max 
  for (let i = 0; i < keys.length; i++) {
    if (vowels.includes(keys[i])) {
      maxVowels = Math.max(maxVowels, map[keys[i]]);
    } else {
      maxConsonant = Math.max(maxConsonant, map[keys[i]]);
    }
  }

  return maxConsonant + maxVowels;
}
