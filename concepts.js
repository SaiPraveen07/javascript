// arrow function
const orders = [
  {
    id: 1,
    item: "A.C",
    quantity: 1,
  },
  {
    id: 2,
    item: "Smart Phones ",
    quantity: 2,
  },
  {
    id: 1,
    item: "T.V",
    quantity: 3,
  },
];
let result = orders.find((order) => order.item === "T.V");
console.log(result);

//example
const printNumbers = {
  phrase: "The current value is:",
  numbers: [1, 2, 3, 4],

  loop() {
    this.numbers.forEach((number) => {
      console.log(this.phrase, number);
    });
  },
};

printNumbers.loop();

//spread operator
let array1 = [5, 6, 7];
let array2 = [8, 9, 10];

// Using concat() method.....
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);

// Using spread (...) operator......
let newArray = [...array1, ...array2];
console.log(newArray);

//example
const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
// Copied elements from cars1 to cars2 here
const cars2 = [...cars1];

// Copied elements from cars1 to cars3 here
// and also add some new elements in cars3
const cars3 = [...cars1, "NISSAN", "TOYOTA"];

console.log(cars1);
console.log(cars2);
console.log(cars3);

//spread operator with object
const cars5 = {
  Brand: "Nissan",
  Color: "BLUE",
  Year: 2004,
};
const cars6 = { ...cars4, ...cars5 };
console.log(cars6);
