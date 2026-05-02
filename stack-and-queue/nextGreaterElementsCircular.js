
let nums = [1,2,1];
// Output: [2,-1,2];
console.log(nextGreaterElementsCircular(nums));
console.log(nextGreaterElementsCircularOptimize(nums));




//Opt using modulo & indices loops 2n times
function nextGreaterElementsCircularOptimize(arr){

    let stack = [];
    let n = arr.length;
    let ans  = Array(n).fill(-1);
    
    for(let i = (2*n)-1; i>=0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i%n] < top){
                ans[i%n] = top;
                break;
            }else{
                stack.pop();
            }
        }
        stack.push(arr[i%n]);
    }

 return ans;
}

//First approch Cicular +add same array
function nextGreaterElementsCircular(numArray){

    let stack = [];
    let arr = [...numArray, ...numArray];
    let n = arr.length;
    let ans  = Array(n).fill(-1);

    stack.push(arr[n-1]);

    for(let i = n-2; i>=0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i] < top){
                ans[i] = top;
                break;
            }else{
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }

 return ans.splice(0,n/2);
}