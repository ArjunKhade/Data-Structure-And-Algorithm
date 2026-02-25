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
  for (let j = 0; j <= i; j++) {
     row = row + "* "
  }
  //print row after inner loop 
  console.log(row);
}

console.log();

// 1
// 12
// 123
// 1234
// 12345

n = 5;
//row
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j <= i; j++) {
     row = row + (j+1);
  }
  //print row after inner loop 
  console.log(row);
}

console.log();

// 1
// 22
// 333
// 4444
// 55555

n = 5;
//row
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j <= i; j++) {
     row = row + (i+1);
  }
  //print row after inner loop 
  console.log(row);
}

console.log();

// 12345
// 1234
// 123
// 12
// 1

n = 5;
//row
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j <(n-i); j++) {
     row = row + (j+1);
  }
  //print row after inner loop 
  console.log(row);
}

console.log();

// *****
// ****
// ***
// **
// *

n = 5;
//row
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j <(n-i); j++) {
     row = row + ("*");
  }
  //print row after inner loop 
  console.log(row);
}