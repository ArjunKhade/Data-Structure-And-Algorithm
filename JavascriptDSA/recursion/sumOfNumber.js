
console.log(sumOfNaturalNum(10));

/**
 * @param {*} num denotes the first n natural num
 * @returns the sum of natural number
 */
function sumOfNaturalNum(num){
    //base condition
   if(num == 0) return 0;
   return num + sumOfNaturalNum(num - 1);
}
