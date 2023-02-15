// import your db connection here
const { db } = require('./db/connection');
// you could potentially import a class which defines all the different sql queries

function routeUserSelection(selectedChoice) {
    //choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department, Add a role', 'Add an employee', 'Update an employee role'],

    switch (selectedChoice) {
        case 'View all departments':
            // do something here
            db.query('SELECT * FROM departments', function(err, rows, fields) {
                if(err) throw new Error('SQL query not successfull');
                console.log('rows are ', rows);
            })
            break;
        case 'View all roles':
            // do something else
        case 'View all employees':

        default:
            break;
    }
}

module.exports = {
    routeUserSelection
}