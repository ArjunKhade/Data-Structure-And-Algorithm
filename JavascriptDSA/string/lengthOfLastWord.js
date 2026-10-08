let s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord1(s));


function lengthOfLastWord(s) {
  s = s.toLowerCase();
  let n = s.length - 1;
  let count = 0;
  //remove empty spaces
  while (n >= 0 && s[n] == " ") {
    n--;
  }
 //count the word
  while (n >= 0 && s[n] != " ") {
    count++;
    n--;
  }

  return count;
}


//Approch 2 Single loop

function lengthOfLastWord1(s){
  let index = s.length - 1;
  let count = 0;
  while(index>=0){
     if(s[index] !== " "){
      ++count;
     }else if(count>0){
       break;
     }
    --index;
  }
   return count;
}
