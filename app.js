/**
 * * App Name: Employee Management System (https://github.com/davidsaulrodriguez/employee-management-system)
 * * Copyright: Copyright (c) 2020 Employee Management System authors (https://github.com/davidsaulrodriguez/employee-management-system/graphs/master)
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
