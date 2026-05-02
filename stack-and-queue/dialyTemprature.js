
let arr = [73,74,75,71,69,72,76,73] //temperatures
// Output: [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures(arr));


function dailyTemperatures(arr){
    let stack = [];
    let n = arr.length;
    let ans = new Array(n).fill(0);
    stack.push(n-1);

    for(let i=n-2; i>=0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i] >= arr[top]){
                stack.pop();
            }else{
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }
    return ans;
}