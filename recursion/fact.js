

console.log(fact(5));

function fact(n){
    if(n == 1 || n == 0) return 1 ;
    return n * fact(n-1);
}