/**
 * * App Name: Employee Management System (https://github.com/davidsaulrodriguez/employee-management-system)
 * * Copyright: Copyright (c) 2021 Employee Management System authors (https://github.com/davidsaulrodriguez/employee-management-system/graphs/master)
 * * Licensed under BSD 2 Clause (https://github.com/davidsaulrodriguez/employee-management-system/blob/master/LICENSE)
 */
require('dotenv').config();
const initQuestions = require('./lib/questions');
const inquirer = require('inquirer');
const table = require('console.table');
const mysql = require('mysql');
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
const db = mysql.createConnection({
  host,
  user,
  password,
  database
})

let employeeRoles = [];
let employeeList = [];
let managerList = [];

// connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log(`
    ███████╗███╗   ███╗███████╗
    ██╔════╝████╗ ████║██╔════╝
    █████╗  ██╔████╔██║███████╗
    ██╔══╝  ██║╚██╔╝██║╚════██║
    ███████╗██║ ╚═╝ ██║███████║
    ╚══════╝╚═╝     ╚═╝╚══════╝
    Employee Management System
         version: v0.9.5

Copyright © 2021 David Saul Rodriguez
    Copyright © 2021 bsdadm.com
       License: BSD-2-Clause
    Author: David Saul Rodriguez
  `);
  init(); // Starts the menu prompt
})

const runPrompt = () => {
  inquirer
    .prompt(initQuestions)
    .then(answers => {
      switch (answers.choices) {
        case 'View Employees':
          viewEmployees();
          break;

        case 'View Departments':
          viewDepartments();
          break;

        case 'View Roles':
          viewRoles();
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'Add Department':
          addDepartment();
          break;

        case 'Add Roles':
          addRole();
          break;

        case 'Update Employee Roles':
          updateEmployeeRole();
          break;

        case 'Quit':
          delete answers.choices;
          quit(answers);
          break;
      }
    })
    .catch(err => {
      if (err) throw err;
    })
}

const viewEmployees = () => {
  db.query(
    `SELECT employee.id AS "ID", employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title AS "Role", department.name AS "Department", role.salary AS "Salary", CONCAT(e.first_name, " ", e.last_name) AS "Manager"
    FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS e ON employee.manager_id = e.id
    ORDER BY employee.id`,
    (err, rows) => {
      console.log('\n');
      console.log(table.getTable(rows));
    }
  );
  runPrompt();
}

const viewDepartments = () => {
  db.query(
    `SELECT id AS "ID", name AS "Department Name"
    FROM department`,
    (err, rows) => {
      if (err) throw err;
      console.log('\n');
      console.log(table.getTable(rows));
    }
  )
  runPrompt();
}

const viewRoles = () => {
  db.query(
    `SELECT role.id AS "ID", title AS "Role Title", salary AS "Salary"
    FROM role
    RIGHT JOIN department ON role.department_id = department.id
    ORDER BY role.id`,
    (err, rows) => {
      if (err) throw err;
      console.log('\n');
      console.log(table.getTable(rows));
    }
  )
  runPrompt();
}


const addEmployee = async () => {
  let roleQuery;
  let managerQuery;
  try {
    roleQuery = await querySync(db, "SELECT id, title FROM role ORDER BY title", []);
    managerQuery = await querySync(db, "SELECT id, CONCAT(first_name, ' ', last_name) as name FROM employee ORDER BY name", []);
  } catch (err) {
    console.log(err);
    throw err;
  }

  const roles = roleQuery.map(elem => elem.title); // make array of strings which are the titles of the roles
  const managers = managerQuery.map(element => element.name);

  // check that there are roles and departments first
  if (managers.length == 0) {
    console.log("Please Insert a department first");
    runPrompt();
    return;
  } else if (roles.length == 0) {
    console.log("Please Insert a role first");
    runPrompt();
    return;
  }
  managers.unshift("None");

  let question = [{
      type: "input",
      message: "Employee First Name: ",
      name: "firstName",
      validate: (value) => {
        let pass = value.match(
          /^([a-zA-Z]{2,30})$/
        );
        if (pass) {
          return true;
        }
        return 'First name cannot be blank or more than 30 characters.';
      }
    },
    {
      type: "input",
      message: "Employee Last Name: ",
      name: "lastName",
      validate: (value) => {
        let pass = value.match(
          /^([a-zA-Z]{2,30})$/
        );
        if (pass) {
          return true;
        }
        return 'Last name cannot be blank or more than 30 characters.';
      }
    },
    {
      type: "list",
      message: "Choose Role: ",
      choices: roles,
      name: "role"
    },
    {
      type: "list",
      message: "Choose Manager: ",
      choices: managers,
      name: "manager"
    }

  ]
  const answer = await inquirer.prompt(question);
  let role_id = roleQuery.filter(elem => elem.title === answer.role)[0].id;
  let manager_id;
  if (answer.manager !== "None") {
    manager_id = managerQuery.filter(elem => elem.name === answer.manager)[0].id;
  }

  let sql;
  let placeholder;
  if (answer.manager == "None") {
    sql = "INSERT INTO employee SET ?";
    placeholder = {
      first_name: answer.firstName,
      last_name: answer.lastName,
      role_id: role_id,
    };
  } else {
    sql = "INSERT INTO employee SET ?";
    placeholder = {
      first_name: answer.firstName,
      last_name: answer.lastName,
      role_id: role_id,
      manager_id: manager_id
    };
  }

  db.query(sql, placeholder, (err, res, fields) => {
    if (err) {
      console.log("\nError: " + err.message);
      return;
    }
    console.log(`${answer.firstName} ${answer.lastName} added to Employees`);
    runPrompt();
  })
}

const addRole = async () => {
  let depQuery;
  let depArray;
  let answer;
  try {
    depQuery = await querySync(db, "SELECT id, name FROM department", []);

    if (depQuery.length == 0) {
      console.log("Please add a department first");
      runPrompt();
      return;
    }
    depArray = depQuery.map(elem => elem.name); // array of department names
    answer = await inquirer.prompt([{
        type: "input",
        message: "What is the name of the Role? ",
        name: "role",
        validate: (value) => {
          let pass = value.match(
            /^([a-zA-Z ]{2,30})$/
          );
          if (pass) {
            return true;
          }
          return 'Role name cannot be blank or more than 30 characters.';
        }
      },
      {
        type: "input",
        message: "Salary: ",
        name: "salary",
        validate: function (value) {
          if (isNaN(parseInt(value))) return "Please input a number";
          return true;
        }
      },
      {
        type: "list",
        message: "What Department is this role under? ",
        choices: depArray,
        name: "department"
      }
    ]);
  } catch (err) {
    console.log(err);
    throw err;
  }

  const departmentID = depQuery.filter(elem => elem.name === answer.department)[0].id;
  const sql = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)"
  db.query(sql, [answer.role, answer.salary, departmentID], (error, result) => {
    if (error) throw error;
    console.log(`${answer.role} added to roles`);
    runPrompt();
  })
}

const addDepartment = async () => {
  let question = [{
    type: "input",
    message: "What is the name of the new Department? ",
    name: "depName",
    validate: (value) => {
      let pass = value.match(
        /^([a-zA-Z ]{2,30})$/
      );
      if (pass) {
        return true;
      }
      return 'Department name cannot be blank or more than 30 characters.';
    }
  }]
  const answer = await inquirer.prompt(question);

  const sql = "INSERT INTO department SET ?";
  const placeholder = {
    name: answer.depName
  };
  db.query(sql, placeholder, (err, res, fields) => {
    if (err) {
      console.log("\nError: " + err.message);
      return;
    }
    console.log(`${answer.depName} added to departments`);
    runPrompt();
  })
}

const updateEmployeeRole = () => {
  // Magic goes here!
  console.log('Update Employee Role option was chosen.');
  runPrompt();
}

const querySync = (connection, sql, args) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  })
}

// Check to see if the user truly wants to quit the app
const quit = (params) => {
  let answer = params;
  if (answer.quit === false) {
    return runPrompt();
  } else {
    db.end();
    console.log(`
   ██████╗  ██████╗  ██████╗ ██████╗     ██████╗ ██╗   ██╗███████╗██╗
  ██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗    ██╔══██╗╚██╗ ██╔╝██╔════╝██║
  ██║  ███╗██║   ██║██║   ██║██║  ██║    ██████╔╝ ╚████╔╝ █████╗  ██║
  ██║   ██║██║   ██║██║   ██║██║  ██║    ██╔══██╗  ╚██╔╝  ██╔══╝  ╚═╝
  ╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝    ██████╔╝   ██║   ███████╗██╗
   ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝     ╚═════╝    ╚═╝   ╚══════╝╚═╝
   `);
  }
}

// Start the menu prompt
const init = () => {
  runPrompt();
}