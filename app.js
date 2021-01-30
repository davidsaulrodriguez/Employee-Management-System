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
       version: development

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
  // Magic goes here!
  console.log('View Employees option was chosen.');
  runPrompt();
}

const viewDepartments = () => {
  // Magic goes here!
  console.log('View Departments option was chosen.');
  runPrompt();
}

const viewRoles = () => {
  // Magic goes here!
  console.log('View Roles option was chosen.');
  runPrompt();
}


const addEmployee = () => {
  // Magic goes here!
  console.log('Add Employee option was chosen.');
  runPrompt();
}

const addDepartment = () => {
  // Magic goes here!
  console.log('Add Department option was chosen.');
  runPrompt();
}

const addRole = () => {
  // Magic goes here!
  console.log('Add Role option was chosen.');
  runPrompt();
}

const updateEmployeeRole = () => {
  // Magic goes here!
  console.log('Update Employee Role option was chosen.');
  runPrompt();
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
