//create a variable that contains the code of the svg shape and concat the options into the code
//set prompt results from inquirer into the respective shape class let createdShape = new whatever
//write the html file with the concated parameters into a svg file in the example folder

const fs = require("fs");

const inquirer = require("inquirer");

fs.writeFile("logo.svg", svgCode, (err) =>
  err ? console.error(err) : console.log("Success!")
);
