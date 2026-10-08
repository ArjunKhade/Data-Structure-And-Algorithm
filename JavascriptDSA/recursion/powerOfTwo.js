

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwoBitwise(16));


function isPowerOfTwo(n){
  // having some remainder less than 1 return false
  if (n <= 0) return false;
  // if the number is divisible by 2
  if(n == 1) return true;
  // if number is odd 
  if (n%2 != 0) return false;
  //divide the number
  return isPowerOfTwo(n/2);
}

//O(1)
function isPowerOfTwoBitwise(n){
  return n > 0 && (n & (n - 1)) === 0;
}