const fs = require ('fs');
const inquirer = require ('inquirer');

inquirer
    .prompt([
        {
        type: 'input',
        name: 'text',
        message: "Enter the characters of your logo",
        },
    ])