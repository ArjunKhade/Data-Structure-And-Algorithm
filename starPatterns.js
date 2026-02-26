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

console.log();

//     *
//    **
//   ***
//  ****
// *****

n = 5;

//row
for (let i = 0; i < n; i++) {
   let row = '';
 //spaces 
  for (let j = 0; j < n-(i+1); j++) {
     row = row + (" ");
  }

   //star 
  for (let k = 0; k <(i+1); k++) {
     row = row + ("*");
  }
  //print row after inner loop 
    console.log(row);
}


console.log();


// 1
// 10
// 101
// 1010
// 10101

n = 5;

for (let i = 0; i < n; i++) {
    let row = '';
    let toggle = 1; // refreshing toggle at every row
  //col 
  for (let j = 0; j<=i; j++) {
     row = row + toggle;
     // toggle the value 
     toggle === 1 ? toggle = 0: toggle = 1;
  }
  //print row after inner loop 
  console.log(row);
}

console.log();

// 1
// 01
// 010
// 1010
// 10101

n = 5;
 let toggle = 1; // not refreshing toggle
for (let i = 0; i < n; i++) {
    let row = '';
  //col 
  for (let j = 0; j<=i; j++) {
     row = row + toggle;
     // toggle the value 
     toggle === 1 ? toggle = 0: toggle = 1;
  }
  //print row after inner loop 
  console.log(row);
}