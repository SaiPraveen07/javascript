const person = {
  fullName: function (area, street) {
    return this.firstName + " " + this.lastName + "," + area + "," + street;
  },
};

const person1 = {
  firstName: "john",
  lastName: "peter",
};

person.fullName.call(person1, "spain", "italy");

console.log(person1, "spain", "italy");

function greet() {
  console.log("Hello there");
}
greet();

function greet(name) {
  console.log("Hello " + name + ":)");
}
let name = "sachin ";

greet(name);

function add(a, b) {
  console.log(a + b);
}

add(6, 8);
add(3, 9);

function add(a, b) {
  return a + b;
}
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

let result = add(number1, number2);

console.log(result);

let x = function (int) {
  return int * int;
};
console.log(x(4));

let y = x(3);
console.log(y);

// object definition
const human = {
  firstName: "tom",
  lastName: "cruise",
  age: 42,
};

// function definition
function greet() {
  const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  console.log(string);
}

// passing object as this value in call() method
greet.call(human);

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);
