const inquirer = require('inquirer');
const db = require('./dbFunctions');

const questions = {
    // 'View all Departments': db.viewDepartments,
    // 'View all Roles': db.viewRoles,
    // 'View all Employees': db.viewEmployees,
    // 'Add a new Department': db.addDepartment,
    // 'Add a new Role': db.addRole,
    // 'Add a new Employee': db.addEmployee,
    // "Update an Employee's Role": ,
    // "Update an Employee's Manager": 
}

exports.mainPrompt = async function() {
    let data = await inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: Object.getOwnPropertyNames(questions),
            name: 'mainChoices',
        },
    ]);

    await questions[data.mainChoices]()
}

let roleList = async function(){
    let [roles,  _] = await db.query(`SELECT title FROM role`)
    for (let i = 0; i < roles.length; i++ ){
        console.log(Object.values(roles[i]));
    }
}

roleList();

