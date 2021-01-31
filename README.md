# EMPLOYEE MANAGEMENT SYSTEM

<span align="center">

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/employee-management-system)](https://github.com/davidsaulrodriguez/employee-management-system/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/employee-management-system)](https://github.com/davidsaulrodriguez/employee-management-system/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/employee-management-system)](https://github.com/davidsaulrodriguez/employee-management-system/stargazers)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/employee-management-system)](https://github.com/davidsaulrodriguez/employee-management-system)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/employee-management-system/latest/main)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/employee-management-system)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/employee-management-system)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_employee-management-system&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_employee-management-system)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_employee-management-system&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_employee-management-system)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_employee-management-system&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_employee-management-system)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_employee-management-system&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_employee-management-system)

</span>

## Table of Contents
 - [Description](#description)
 - [Screenshots](#screenshots)
 - [Dependencies](#dependdencies)
 - [Installation](#installation)
 - [Configuration](#configuration)
 - [Usage](#usage)
 - [Supported Versions](#supported-versions)
 - [Contributing](#contributing)
 - [Bugs and Issues](#bugs-and-issues)
 - [License](#license)

## Description

**Employee Management System** is a NodeJS based command line interface for keeping track of and managing your employees in a relational MySQL database.

At the moment the **Employee Management System** keeps track of Employees, their Roles and the Departments they work in.

## Screenshots

**Coming Soon**

## Dependencies

**Project Dependencies**
 - "console.table": ^0.10.0
 - "dotenv": ^8.2.0
 - "inquirer": ^7.3.3
 - "mysql": ^2.18.1

 **Development Dependencies**

 - "mysql-import": ^5.0.20

## Installation

**Installation Requirements**

You will need [NodeJS][nodejs] installed for use with this project.

You will also need the latest version of [MySQL][mysql] or [MariaDB][mariadb] installed locally on your machine.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/employee-management-system.git
cd employee-management-system/
```

**Install**

Now install the required dependencies with npm.

```shell
npm install
```

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

## Usage

Before using this application you should create the **Employee Management System** database. You can do this by running:

```shell
npm run createDB
```

After creating the database with `npm run createDB` you can start the **Employee Management System** by running:

```shell
npm run start
```

**Optional**: If you would like to prepopulate the **Employee Management System** database with sample data to test this management system, you should run:

```shell
npm run prepopulate
```

## Supported Versions

Below is a list of the currently supported versions of this software.

| Release | Status            | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :----------------: | :-------------: | :------------------: | :--------------------: | :-: |
| develop  | Unstable | - | - | - | - |
| v1  | :heavy_check_mark: | 2021-02-02 | 2021-06-01 | - | 2022-12-02 |
| v2  | :construction: | 2021-06-01 | 2021-12-01 | 2022-06-01 | 2023-06-01 |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

 This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/employee-management-system/archive/main.zip
[mysql]: https://www.mysql.com/
[mariadb]: https://mariadb.org/
[nodejs]: https://nodejs.com
[support]: ./SUPPORTED_VERSIONS.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/employee-management-system/issues
[license]: ./LICENSE