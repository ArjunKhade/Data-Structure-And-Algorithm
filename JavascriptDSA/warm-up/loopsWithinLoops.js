
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    //print the statement 3*3=9 times
    console.log("i="+i,"j="+j);
  }
}

console.log();

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i="+i,"j="+j);
  }
}

console.log();

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("i="+i,"j="+j);
  }
}

console.log();


for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log("i="+i,"j="+j);
  }
}

console.log();


for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log("i="+i,"j="+j);
  }
}