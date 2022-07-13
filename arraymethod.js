//isarray() method
let number = [1, 2, 3, 4];

// checking whether numbers is an array or not
console.log(Array.isArray(number));

let text = "JavaScript";

// checking whether text is an array or not
//example 2
console.log(Array.isArray(text));
let movies = ["vikram", "kgf", "ps1"];
console.log(Array.isArray(movies));

let fruit = "Apple";
console.log(Array.isArray(fruit));

//constructor method()
let languages = ["JavaScript", "Java", "Python"];

let constructor = languages.constructor;
console.log(constructor);
//example using class
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log("You drive the car!");
  }
  brake() {
    console.log("You step on the brakes!");
  }
}

let car1 = new Car("toyota", "fortuner", 2009, "white");
let car2 = new Car("ford", "mustang", 2022, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

//length() method
let colors = ["red", "green", "blue"];
console.log(colors.length);
colors.push("yellow");
console.log(colors.length);

//example2
let newsPaper = ["hindu", "times of india", "indian express"];
newsPaper.length = 2;
console.log(newsPaper.length);

//index0f() method
let language = ["english", "tamil", "telugu", "malayalam"];

// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
console.log(index);

//concat() method
const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [0, 2, 4, 6, 8];
const allNumbers = oddNumbers.concat(evenNumbers);
console.log(allNumbers);
//writing a function that merges array using concat
function concat(array1, array2, array3) {
  return [].concat(array1, array2, array3);
}
const localteam = ["mi", "csk", "srh"];
const newteam = ["lsg", "gt", "rps"];
const countryteam = ["india", "england", "austrailia"];
const allteams = concat(localteam, newteam, countryteam);
allteams.forEach(function (teams) {
  console.log(`one of my team from allteam  is ${teams}.`);
});

//array reduce() method
const shoppingcart = [
  { id: 1, item: "chocolate", cost: 30 },
  { id: 2, item: "milk", cost: 35 },
  { id: 3, item: "popcorn", cost: 70 },
];
let totalCost = shoppingcart.reduce(function (accumulator, currentval) {
  return accumulator + currentval.cost;
}, 0);
console.log("total amount is:", totalCost);
//example 1
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum);

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation);
//push() method
let color = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "back"];

colors.push(...cmyk);

console.log(color);
