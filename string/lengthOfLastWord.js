let s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));

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
