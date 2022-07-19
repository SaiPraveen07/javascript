// program to show try.catch in a program

const numerator = 100;
denominator = "a";

try {
  console.log(numerator / denominator);

  // forgot to define variable a
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

const val = 100,
  int = "a";

try {
  console.log(val / int);
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}

//example
let student = {
  firstName: "sri",
  lastName: "krishna",
  get fullName() {
    return `${student.firstName} ${student.lastName}`;
  },
  set fullName(value) {
    if (typeof value != "string") {
      const err = new Error("it is not a string");
      throw err;
    }

    if (value.length <= 3) throw new Error("Name Invalid");

    let values = value.split("");
    this.firstName = value[0];
    this.lastName = value[1] ?? "";
  },
};

try {
  student.fullName = "aaa";
} catch (ex) {
  alert(ex);
}
