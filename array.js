//array map methods
let users = [
  { firstName: "sai", lastName: "praveen" },
  { firstName: "Rohit", lastName: "Sharma" },
  { firstName: "Virat", lastName: "kohli" },
];

let userFullnames = users.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});

console.log(userFullnames);
// assigning number value to map
let arr = [9, 4, 3, 2];

arr.map(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
  return element;
}, 80);

const bikes = [
  { firstname: "KTM", lastname: "Duke" },
  { firstname: "Pulsar", lastname: "NS200" },
  { firstname: "Honda", lastname: "Shine" },
];

bikes.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
console.log(bikes);
//Array filter method
const queue_by_age = [12, 25, 42];
let adults = queue_by_age.filter(function (value) {
  return value >= 18;
});
console.log("adults", adults);
// filter example 1
const cart_items = [
  { id: 1, items: "Andriod mobile", cost: "7500" },
  { id: 2, items: "iphone mobile", cost: "66000" },
  { id: 3, items: "windows mobile", cost: "9500" },
];
let phones = cart_items.filter((value) => value.cost < 10000);
console.log("lowcost", phones);

// array foreach method
const students = ["vinod", "sandeep", "John"];

students.forEach((element) => {
  console.log(element);
});
// foreach with map
let map = new Map();

// inserting elements
map.set("name", "ravi");
map.set("age", "22");

// looping through Map
map.forEach(myFunction);

function myFunction(value, key) {
  console.log(key + "- " + value);
}
