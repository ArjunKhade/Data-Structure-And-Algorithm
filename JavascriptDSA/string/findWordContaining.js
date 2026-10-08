
let words = ["leet","code"];
let x = "e";

console.log(findWordContaining(words, x))

function findWordContaining(words, x){
  const res = [];
  for(let i=0; i<words.length; i++){
    for(let j=0; j<words[i].length;j++){
        if(words[i][j]=== x){
            res.push(i);
            break;
        }
    }
    
    //second approach 
    // if(words[i].includes(x)){
    //     res.push(i);
    // }

  }

  return res;
}