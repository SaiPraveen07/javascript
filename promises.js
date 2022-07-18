let testing1 = new Promise((resolve, reject) => {
  let number = 2 + 7;
  if (number == 10) {
    resolve("success:" + number);
  } else {
    reject("failed");
  }
});

let testing2 = new Promise((resolve, reject) => {
  let number = 4 + 9;
  if (number == 10) {
    setTimeout(() => {
      resolve(testing2);
    }, 1000);
  } else {
    reject("failed");
  }
});

//testing1.then((data) => {
//console.log(data);
//}).catch((error) => {
// console.log(error);
//});

Promise.race([testiong1, testing2])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
