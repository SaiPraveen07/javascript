//setTimeout
//syntax
//setTimeout(function(){},interval)
// program to display a text using setTimeout method
function greet() {
  console.log("Hello world");
}

let intervalId = setTimeout(greet, 3000);
console.log("Id: " + intervalId);

//example 2
function Myfunction() {
  setTimeout(() => {
    console.log("welcome to trident devTeam");
  }, 3000);
  console.log("this is javascript");
}
Myfunction();
