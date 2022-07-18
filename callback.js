//call back
setTimeout(() => {
  console.log("this is javascript callback");
}, 3000);

//example 1
function filter(numbers, callback) {
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 5, 7, 3, 4, 6];

let oddNumbers = filter(numbers, (number) => number % 2 != 0);

console.log(oddNumbers);

//example 2
function orderPizza(type, name, callback) {
  console.log("Pizza ordered...");
  console.log("Pizza is for preparation");
  setTimeout(() => {
    let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
    callback(msg);
  }, 3000);
}

orderPizza("Veg", "Cheese Barbeque", (message) => {
  console.log(message);
});
