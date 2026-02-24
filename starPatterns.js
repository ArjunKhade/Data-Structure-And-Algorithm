let n = 4;

// * * * * 
// * * * * 
// * * * * 
// * * * * 

//row
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j < n; j++) {
     row = row + "* "
  }
  //print row after inner loop 
  console.log(row);
}

console.log();

// * 
// * * 
// * * * 
// * * * * 

//row
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j < i+1; j++) {
     row = row + "* "
  }
  //print row after inner loop 
  console.log(row);
}
