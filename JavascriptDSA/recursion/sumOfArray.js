

arr =  [5 ,3, 2 , 1, 0, 6 ];

console.log(sumOfAllNumbers(arr.length - 1));
console.log(sumOfAllOddNumbers(arr.length - 1));
console.log(sumOfAllEvenNumbers(arr.length -1));

function sumOfAllNumbers(n){
   if(n == 0) return arr[n];
   return arr[n] + sumOfAllNumbers(n-1);
}


function sumOfAllOddNumbers(n){
    let isOdd = arr[n] % 2 != 0;

    if(n==0){
       return isOdd ? arr[n] : 0;
    }

    return isOdd ? arr[n] + sumOfAllOddNumbers(n-1) : 0 + sumOfAllOddNumbers(n-1)
}

function sumOfAllEvenNumbers(n){
    let isEven = arr[n] % 2 == 0;

    if(n==0){
        return isEven ? arr[n] : 0;
    }

    return isEven ? arr[n] + sumOfAllEvenNumbers(n-1) : 0 + sumOfAllEvenNumbers(n-1)

}
