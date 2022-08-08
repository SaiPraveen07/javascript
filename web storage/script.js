const employeeForm = document.getElementById("EmployeeForm");
const employeesContainer = document.querySelector(".employees");
const nameInput = employeeForm["name"];
const ageInput = employeeForm["age"];
const idInput = employeeForm["id"];

const employees = JSON.parse(localStorage.getItem("employees")) || [];

const addEmployee = (name, age, id) => {
  employees.push({
    name,
    age,
    id,
  });

  localStorage.setItem("employees", JSON.stringify(employees));

  return { name, age, id };
};

const createEmployeeElement = ({ name, age, id }) => {
  // Create elements
  const employeesDiv = document.createElement("div");
  const employeeName = document.createElement("h2");
  const employeeAge = document.createElement("p");
  const employeeid = document.createElement("p");

  employeeName.innerText = "Employee name: " + name;
  employeeAge.innerText = "Employee age: " + age;
  employeeid.innerText = "Employee id: " + id;

  // Add
  employeesDiv.append(employeeName, employeeAge, employeeid);
  employeesContainer.appendChild(employeesDiv);

  employeesContainer.style.display = employees.length === 0 ? "none" : "flex";
};

employeesContainer.style.display = employees.length === 0 ? "none" : "flex";

employees.forEach(createEmployeeElement);

employeeForm.onsubmit = (e) => {
  e.preventDefault();

  const newEmployee = addEmployee(
    nameInput.value,
    ageInput.value,
    idInput.value
  );

  createEmployeeElement(newEmployee);

  nameInput.value = "";
  ageInput.value = "";
  idInput.value = "";
};

localStorage.ClearItem("Employees");
