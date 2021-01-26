-- * Insert sample data to populate the database tables * --

-- * Add some sample departments * --
-- Human Resources
INSERT INTO department (name)
VALUES ("Human Resources");

-- Marketing Department
INSERT INTO department (name)
VALUES ("Marketing");

-- Customer Service
INSERT INTO department (name)
VALUES ("Customer Service");

-- Sales Department
INSERT INTO department (name)
VALUES ("Sales");

-- Engineering Department
INSERT INTO department (name)
VALUES ("Engineering");

-- Customer Service
INSERT INTO department (name)
VALUES ("Finance");

-- Legal Department
INSERT INTO department (name)
VALUES ("Legal");

-- * End of sample departments * --

-- * Start of sample Roles *--

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Sr. Accountant", 125000.00, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("Jr. Accountant", 90000.00, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000.00, 7);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000.00, 7);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Rep.", 35000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Lead", 43000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Coordinator", 66000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Associate", 58000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Digital Marketing Manager", 78000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 56000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Payroll Manager", 42000.00, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("HR Assistant", 38000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("HR Associate", 32000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Payroll Cleark", 35000.00, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 120000.00, 4);

-- * End of sample Roles *--

-- * Start of sample Employee data * --

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Noell", "Heller", null, 14);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Edward", "Gauthier", 1, 16);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Ruby", "Cormier", 1, 17);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Ryan", "Helgeson", null, 19);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("James", "Davis", 4, 7);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Eva", "Simms", 4, 8);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Vernon", "Grant", null, 15);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Jeffery", "Wickham", 7, 18);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Linda", "Martinez", 7, 3);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Geneva", "Morales", 7, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Mitchell", "Rodriquez", null, 2);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Michael", "Reese", 11, 1);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Luther", "Salgado", null, 13);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Susan", "Wise", 13, 12);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Gene", "Salas", 13, 11);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Jack", "Castillo", null, 10);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Yvonne", "Anderson", 16, 9);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Betty", "Corson", null, 6);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Steven", "Wagner", 18, 5);
