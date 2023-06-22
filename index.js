const fs = require ('fs');
const inquirer = require ('inquirer');
const logoCreator = require ('./utils/logoCreator');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: "Enter the characters of your logo: ",
        },
        {
            type: 'input',
            name: 'logoTextColor',
            message: "Input text color - enter color keyword or a hexadecimal number: ",
        },
        {
            type: 'list',
            name: 'logoShape',
            message: "Select the shape of your logo: ",
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "Input shape color - enter color keyword or a hexadecimal number: ",
        },
    ])
    .then((answers) => {
        logoCreator.createLogo(answers)
            .then((svgCode) => {
                fs.writeFileSync('logo.svg', svgCode);
                console.log('Your logo has been generated!');
            })
            .catch((error) => {
                console.error('An error has occurred while creating your logo:', error)
            });
    })
    .catch((error) => {
        console.error('Error has occurred:', error);
    });