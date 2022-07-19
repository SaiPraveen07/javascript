// async function example

async function f() {
  console.log("Async function.");
  return Promise.resolve(1);
}

f().then(function (result) {
  console.log(result);
});

//await
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 2000);
});

async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("welcome");
}

// calling the async function
asyncFunc();

//example
async function myFn() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(1);
    }, 1000)
  );
}

async function awaitFn() {
  try {
    const v1 = await myFn();
    const v2 = await incrementOne(v1);
    const v3 = await incrementOne(v2);
    const v4 = await incrementOne(v3);
    console.log(v4);
  } catch (error) {
    console.error("global error", error);
  }
}

//async function awaitFn() {
//myFn()
//.then((res) => incrementOne(res))
// .then((res) => incrementOne(res))
//.then((res) => incrementOne(res))
//.then(console.log);
//}

async function incrementOne(res) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(res + 1);
    }, 1000)
  );
}
awaitFn();
