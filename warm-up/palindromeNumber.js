console.log(isPalindromNumber(121));

function isPalindromNumber(num){
  if(num<0) return false;   // Negative numbers can't be palindrome

  let original = num;      // Store original number
  let rev = 0;

  while(num>0){
    let rem = num % 10;          // Get last digit
    rev = rev*10 + rem;          // Build reversed number
    num = Math.floor(num/10);    // Remove last digit
  }

  return rev === original;       // Compare reversed with original
}