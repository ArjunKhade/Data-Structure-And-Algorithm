//Reverse Polish Notation
tokens = ["2","1","+","3","*"];
// Output: 9

console.log(evalRPN(tokens));
console.log(evalRPNUsingMap(tokens));

function evalRPN(tokens){
    let stack = [];
    for(let i=0; i<tokens.length; i++){
        if(['+','-','*','/'].includes(tokens[i])){
          let a = stack.pop();
          let b = stack.pop();
          let ans  = eval(`${b} ${tokens[i]} ${a}`);//eval is slow 
          stack.push(Math.trunc(ans));
        }else{
          stack.push(tokens[i]);
        }
    }
    //return Number(stack.pop());
    return +stack[0];
}

//better without eval using map 
function evalRPNUsingMap(tokens){
    let stack = [];
    let map = {
        '+':(a,b) => b+a,
        '-':(a,b) => b-a,
        '*':(a,b) => b*a,
        '/':(a,b) => Math.trunc(b/a),
    }
    for(let i=0; i<tokens.length; i++){
        if(['+','-','*','/'].includes(tokens[i])){
          let a = stack.pop();
          let b = stack.pop();
          let ans  = map[tokens[i]](a,b);
          stack.push(ans);
        }else{
          stack.push(Number(tokens[i]));
        }
    }
    
    return stack.pop();
}