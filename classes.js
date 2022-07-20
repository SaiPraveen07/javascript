// parent class
class Person {
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed";
  }

  greet() {
    console.log(`Hello ${this.name}.`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    // call the super class constructor and pass in the name parameter
    super(name);

    // Overriding an occupation property
    this.occupation = "Student";
  }

  // overriding Person's method
  greet() {
    console.log(`Hello student ${this.name}.`);
    console.log("occupation: " + this.occupation);
  }
}

let p = new Student("dravid");
p.greet();

//static class
class Employee {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static createAnonymous(gender) {
    let name = gender == "male" ? "shiva" : "ramu";
    return new Employee(name);
  }
}

//example
class Bike {
  constructor(name) {
    this.name = name;
  }

  static bikeInfo(x) {
    return "This is my Bike: " + x.name;
  }
}
let myBike = new Bike("Yamaha YZF R15 V3");
Bike.bikeInfo(myBike);
