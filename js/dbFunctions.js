const database = require('./database');
const inquirer = require('inquirer');

//viewing functions

exports.viewDepartments = async function(){
    let [depts, _] = await database.query('SELECT * FROM department');
    console.log(depts);
};

exports.viewRoles = async function(){
    let [roles, _] = await database.query('SELECT * FROM role',);
    console.log(roles);
};

exports.viewEmployees = async function(){
    let [employees, _] = await database.query('SELECT * FROM employee',);
    console.log(employees);
};


//adding functions

exports.addDepartment = async function (){
    let data = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'newDeptName'
        }
    ])
    await database.query(`INSERT INTO department (name) VALUES (${data.newDeptName})`);
    console.log("New department added!");
};

exports.addRole = async function(){;
    let data = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'newRoleName'
        },
        {
            type: 'input',
            message: 'What is the salary for this role?',
            name: 'newRoleSalary'
        },
        {
            type: 'list',
            message: 'Which department is this role a part of?',
            choices: '',
            name: 'newRoleDept'
        }
    ])
    await database.query(`INSERT INTO role (title, salary, department_id) VALUES ('${data.newRoleName}', ${data.newRoleSalary}, ${data.newRoleDept})`);
    console.log("New role added!");
};

exports.addEmployee = async function(){;
    // let [roles,  _] = await database.query(`SELECT title FROM role`)
    let data = await inquirer.prompt([
        {
            type: 'input',
            message: "What is the new employee's first name?",
            name: 'firstName'
        },
        {
            type: 'input',
            message: "What is the new employee's last name?",
            name: 'lastName'
        },
    //     // {
    //     //     type: 'list',
    //     //     message: 'What is the role of this employee?',
    //     //     choices: Object.values(roles),
    //     //     name: 'newEmployeeRole'
    //     // }
    ])
    // let formatRoles = Object.values(roles);
    // console.log(formatRoles);
    let roleID = database.query(`SELECT id FROM role WHERE title = "${data.newEmployeeRole}"`)
    await database.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.firstName}', '${data.lastName}', ${roleID}, ${managerID})`);
    console.log("New employee added!");
};

//update function
async function updateEmployeeRole(employeeID, newRoleID){;
    await database.query(`UPDATE employee SET role_id = '${newRoleID}' WHERE id = '${employeeID}'`);
    console.log(`Employee ${employeeID}'s role has been updated to ${newRoleID}!`);
};

async function updateEmployeeManager(employeeID, newManagerID){
    await database.query(`UPDATE employee SET manager_id = '${newManagerID}' WHERE id = '${employeeID}'`);
    console.log(`Employee ${employeeID}'s manager has been updated to ${newManagerID}!`);
};
