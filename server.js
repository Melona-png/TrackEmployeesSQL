const inquirer = require("inquirer")
const mysql = require("mysql2")
const { routeUserSelection } = require('./utils/userSelection');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'userSelection',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department, Add a role', 'Add an employee', 'Update an employee role'],
    },
  ])
  .then((data) => {
    console.log('Data object looks like', data);
    const { userSelection } = data; // const userSelection = data.userSelection;
    // pass the data object into your function that dictates the next steps to take
    routeUserSelection(userSelection);

    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });