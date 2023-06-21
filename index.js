const fs = require ('fs');
const inquirer = require ('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: "Enter the characters of your logo",
        },
        {
            type: 'input',
            name: 'textColor',
            message: "Input text color - enter color keyword or a hexadecimal number",
        },
        {
            type: 'list',
            name: 'logoShape',
            message: "Select the shape of your logo",
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "Input shape color - enter color keyword or a hexadecimal number",
        },
    ]);