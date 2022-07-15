//Comparison operators
const a = 5,
  b = 2,
  c = "items";
//relational operator
let x = 5;
console.log(x < 5);
console.log(x <= 5);
console.log(x > 5);
console.log(x >= 5);
// equal to operator
console.log(a == 5);
console.log(b == "2");
console.log(c == "items");
//strict eequal to
console.log(a === 5);

const int = 3,
  str = "run";

// not equal operator
console.log(a != 2);
console.log(b != "run");

//logical operators
const i = true,
  j = false;
const k = 4;

// logical AND
console.log(i && i);
console.log(i && j);

console.log(k > 2 && k < 2);
const val1 = true,
  val2 = false,
  val3 = 4;

// logical OR
console.log(val1 || val2);
console.log(val2 || val2);
console.log(val3 > 2 || cval3 < 2);

const a1 = true,
  b1 = false;

// logical NOT
console.log(!a1);
console.log(!b1);
//Ternary operators
//person age is more than 18
let age = 17;
let type = age > 18 ? "adult ticket" : "child ticket";
console.log(type);

//if(condition){
//let type = "adult ticket";
//}else{
//let type = "child ticket";
//}

// bitwise operators
const readPermission = 5;
const writePermission = 7;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
let message = myPermission & readPermission ? "yes" : "no";
console.log(myPermission);

//switch case
let present = 24;

switch (present) {
  case 1:
    present = "one";
    break;
  case 2:
    present = "two";
    break;
  default:
    present = "not found";
    break;
}
console.log(`The value is ${present}`);
//example switch case 2

let marks = 99;

switch (true) {
  case marks > 90:
    console.log("Super Grade");
    break;
  case marks > 50:
    console.log("pass");
    break;
  case marks < 50:
    console.log("fail");
    break;
  default:
    console.log("unknown Grade");
}
// while loop
// program to display numbers from 1 to 5
// initialize the variable
let l = 1,
  m = 5;

// while loop from i = 1 to 5
while (l <= m) {
  console.log(l);
  l += 1;
}
//example 2
let n = 20;

while (n >= 1) {
  if (n % 2 !== 0) {
    console.log("odd Number #" + n);
  }
  n--;
}

//do-while loop
// program to display numbers
let w = 1;
const s = 5;

// do...while loop from 1 to 5
do {
  console.log(w);
  w++;
} while (w <= n);
