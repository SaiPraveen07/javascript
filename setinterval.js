//setInterval
//example1
// program to display a text using setInterval method
function greet() {
  console.log("Hello world");
}

setInterval(greet, 1000);

//example 2
function Myfunction() {
  setInterval(() => {
    console.log("Myworld");
  }, 3000);
}

Myfunction();
