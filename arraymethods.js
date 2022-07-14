//pop method
let intArr = [20, 45, 68];
intArr.pop(); // returns the removed item
console.log(intArr);
//push method
let numbers = [23, 45];
numbers.push(67); // returns the new array length
console.log(numbers);
//example
let games = ["hockey", "cricket", "football"];
console.log(games);
games.pop();
console.log(games);
games.push("volleyball");
console.log(games);
//shift method
let trident = ["dev", "devops", "mobile", "QA", "Manual"];
trident.shift(); //removes first element
console.log(trident);
//unshift method
let actors = ["MGR", "Rajini", "KamalHassan", "Ajith"];
actors.unshift("vijay");
console.log(actors);
//for of arrays

const students = ["siva", "Sanjay", "jovan"];
for (let element of students) {
  // display the values
  console.log(element);
}
//for loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("odd Number#" + i);
  }
}
// using decreement
for (let i = 10; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log("odd Number#" + i);
  }
}
//for-in  loop
const person = {
  name: "saipraveen",
  age: 23,
  bloodgroup: "0+",
};
for (let key in person) {
  console.log(key + ":", person[key]);
}

//for-in and for-of using arrays
let cartoons = ["tom", "jerry"];
for (let key in cartoons) {
  console.log(cartoons[key]);
}
for (let character of cartoons) {
  console.log("character:" + character);
}
