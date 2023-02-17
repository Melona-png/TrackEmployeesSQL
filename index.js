const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mio188742!",
  database: "employee_tracker",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("MySQL Connected");
  main();
});

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userSelection",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((data) => {
      switch (data.userSelection) {
        case "View all departments":
          db.query("SELECT * FROM department", function (err, res) {
            if (err) throw new Error("SQL query not successfull");
            console.table(res);
            main();
          });
          break;
        case "View all roles":
          db.query("SELECT * FROM role", function (err, res) {
            if (err) throw new Error("SQL query not successfull");
            console.table(res);
            main();
          });
          break;
        case "View all employees":
          db.query("SELECT * FROM employee", function (err, res) {
            if (err) throw new Error("SQL query not successfull");
            console.table(res);
            main();
          });
          break;
        case "Add a department":
          inquirer
            .prompt([
              {
                type: "input",
                name: "depName",
                message: "What is this new department's name?",
              },
            ])
            .then((res) => {
              db.query("INSERT INTO department SET ?", {
                name: res.depName,
              });
              console.log(`${res.depName} added to departments!`);
              main();
            });
          break;
        case "Add a role":

            inquirer
              .prompt([
                {
                  type: "input",
                  name: "roleName",
                  message: "What is this new role name?",
                },
                {
                  type: "input",
                  name: "salaryInt",
                  message: "What salary would you like to set?",
                },
                {
                  type: "input",
                  name: "deptID",
                  message: "Which ID corresponds to this roles department?",
                },
              ])
              .then((res) => {
                db.query("INSERT INTO role SET ?", {
                  title: res.roleName,
                  salary: res.salaryInt,
                  department_id: res.deptID
                });
                console.log(`${res.roleName} added to roles!`);
                main();
              });
          break;
          case "Add an employee":
  
              inquirer
                .prompt([
                  {
                    type: "input",
                    name: "employeeFirstName",
                    message: "What is this employee's first name?",
                  },
                  {
                    type: "input",
                    name: "employeeLastName",
                    message: "what is the employee's last name?",
                  },
                    {
                      type: "input",
                      name: "roleID",
                      message: "What is this employee's given role ID",
                    },
                    {
                      type: "input",
                      name: "manager",
                      message: "What is this employee's manager ID?",
                    }
                ])
                .then((res) => {
                  db.query("INSERT INTO employee SET ?", {
                    first_name: res.employeeFirstName,
                    last_name: res.employeeLastName,
                    role_id: res.roleID,
                    manager_id: res.manager
                  });
                  console.log(`${res.roleName} added to roles!`);
                  main();
                });

          break;
          case "Update an employee":
  
              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "employee",
                    message: "Which employee would you like to update?",
                    choices: [
                      `SELECT * FROM employee`
                  ]
                  },
        ])
        .then((res) => {
          db.query("INSERT INTO employee SET ?", {
            first_name: res.employeeFirstName,
            last_name: res.employeeLastName,
            role_id: res.roleID,
            manager_id: res.manager
          });
          console.log(`${res.roleName} added to roles!`);
          main();
        })
      }}
    )};