
console.log(reversedNumber(-511545654));

function reversedNumber(num){
    
    let original = num;
    //make number abs if it is negative
    num = Math.abs(num);
    let rev = 0;

    while(num>0){
     let rem = num%10;
     rev= rev*10 + rem;
     num = Math.floor(num/10);
    }

    //signed 32-bit integer range [-231, 231 - 1], then return 0.
    let limit = Math.pow(2,31);
    if(rev > limit-1 || rev < -limit) return 0;

    //return the sign with number
    return (original < 0)? -rev: rev;

}