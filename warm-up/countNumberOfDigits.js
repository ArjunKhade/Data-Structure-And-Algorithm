


console.log(countNumberOfDigit(-25))

function countNumberOfDigit(n){
  // if number is 0   
  if(n == 0) return 1;
  //check for negative number
  n= Math.abs(n);
  
  let count = 0;
  while(n>0){
    n = Math.floor(n/10);
    count++;
  }
  return count;
}