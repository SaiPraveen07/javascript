//  arrow functions
let x = (x, y) => x * y;
//arrow function as expression
let age = 20;

let voters =
  age < 18 ? () => console.log("not eligible") : () => console.log("eligible");

voters();
// multiline arrow functions
let int = (a, b) => {
  let result = a * b;
  return result;
};

let result1 = int(5, 7);
console.log(result1);

//this arrow function
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car = new Car();
car.speedUp(80);
//spread operator
let myteam = ["csk", "mi", "srh"];
let newteam = [...myteam];
console.log(myteam);
//Inserting the elements of one array into another
let teams = ["csk", "srh", "mi"];
let newteams = ["lsg", "gt", "rps", ...teams];
console.log(newteam);
//Appending teams after gt
let newteams1 = ["lsg", "gt", ...teams, "rps"];
console.log(newteams1);
