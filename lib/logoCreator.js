const fs = require('fs');

//receive the answers
    //verify the colors are correct
//create the logo
function createLogo(answers){
    return new Promise ((resolve, reject) => {
        try {
            const svgCode = generateSvgCode(answers);
            resolve(svgCode);
        } catch (error) {
            reject (error);
        }
    });
}

//generate the SVG code
function generateSvgCode(answers) {
    const shapeCode = generateShapeCode(answers);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeCode}
    <text x="30" y="50" font-size="18" fill="${answers.logoTextColor}">${answers.logoText}</text>
  </svg>`.trim();
};

//and then generate the shape with the colors
function generateShapeCode(answers){
    switch (answers.logoShape){
        case 'Square':
            return `<rect x="0" y="0" width="100" height="100" fill="${answers.shapeColor}"/>`;
            case 'Circle':
              return `<circle cx="50" cy="50" r="50" fill="${answers.shapeColor}"/>`;
            case 'Triangle':
              return `<polygon points="0,0 100,0 50,100" fill="${answers.shapeColor}"/>`;
            default:
              return '';
          }
};

//verifies the colors are correct
function isValidColor(color) {
    const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    const colorKeywords = [
        'red',
        'blue',
        'green',
    ]

    return colorRegex.test(color) || colorKeywords.includes(color.toLowerCase());
}

module.exports = { createLogo };