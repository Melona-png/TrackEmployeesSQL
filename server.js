const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mio188742!",
    database: "employee_tracker"
  });
  
  // Connect to the database
  connection.connect(err => {
    if (err) throw err;
    console.log("Connected to the employee tracker database");
    // Start the prompt
    startPrompt();
  });

  //function for prompt input
function startPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Add Role",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Employees By Department":
          viewAllEmployeesByDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}
// view all employees
function viewAllEmployees() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}

// view all employees by department
function viewAllEmployeesByDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "list",
      message: "Which department would you like to view?",
      choices: [
        "Sales",
        "Engineering",
        "Finance",
        "Legal"
      ]
    })
    .then(function(answer) {
      connection.query(
        "SELECT * FROM employees WHERE department = ?",
        [answer.department],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }
      );
    });
}
// Function to add an employee
function addEmployee() {
  inquirer
  .prompt([
  {
  name: "first_name",
  type: "input",
  message: "What is the employee's first name?"
  },
  {
  name: "last_name",
  type: "input",
  message: "What is the employee's last name?"
  },
  {
  name: "role",
  type: "list",
  message: "What is the employee's role?",
  choices: [
  "Salesperson",
  "Engineer",
  "Finance",
  "Lawyer"
  ]
  },
  ])
  .then(function(answer) {
  connection.query(
  "INSERT INTO employees SET ?",
  {
  first_name: answer.first_name,
  last_name: answer.last_name,
  role: answer.role,
  },
  (err) => {
  if (err) throw err;
  console.log(
  "Successfully added employee: " +
  answer.first_name +
  " " +
  answer.last_name
  );
  startPrompt();
  }
  );
  });
  }
  
  // Function to remove an employee
  function removeEmployee() {
  inquirer
  .prompt({
  name: "employee",
  type: "list",
  message: "Which employee would you like to remove?",
  choices: [
  "Faker Goat",
  "Morse Code",
  "Json Borne",
  "MorganAnd Morgan"
  ]
  })
  .then(function(answer) {
  connection.query(
  "DELETE FROM employees WHERE first_name = ?",
  [answer.employee],
  (err) => {
  if (err) throw err;
  console.log("Successfully removed employee: " + answer.employee);
  startPrompt();
  }
  );
  });
  }



        