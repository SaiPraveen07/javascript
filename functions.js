//function Arguments

function sum(x, y, z) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return x + y + z;
}
sum(4, 5, 6);
//example

function sumExpense() {
  let total = 0;

  for (let value of arguments) {
    total += value;
  }
  return total;
}

let result = sumExpense(45, 76, 145, 99);
console.log(result);

//apply()
const personName = {
  firstName: "michael",
  lastName: "Jackson",
};

// function definition
function greet(wish, message) {
  return `${this.firstName}, ${wish}. ${message}`;
}

let result1 = greet.apply(personName, ["Good morning", "How are you?"]);

console.log(result1);

const car = {
  name: "BMW",
  description() {
    return `The ${this.name} is of ${this.color} color.`;
  },
};

// object definition
const bike = {
  name: "Duke",
  color: "red",
};

let result2 = car.description.apply(bike);

console.log(result2);

//bind function
const student1 = {
  name: "ben",
  introduction: function (score) {
    console.log(this.name + "scored " + score + " in an exam.");
  },
};

// object definition
const student2 = {
  name: "qwen ",
};

// passing two parameters student2 and '75'
let result3 = student1.introduction.bind(student2, 75);

result3();

//closure
function greet() {
  // variable defined outside the inner function
  let name = "praveen";

  function displayName() {
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1);
console.log(g1());
