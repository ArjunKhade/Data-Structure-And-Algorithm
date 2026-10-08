
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the 
// only odd number.

let num = '52';

console.log(largestOddNumber(num));

function largestOddNumber(num){
  let n = num.length-1;
  while(n>=0){
    if(Number(num[n])%2 == 1){
        return num.substring(0,n+1);
    }
    --n;
  }
  return "";
}