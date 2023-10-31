const fs = require("fs");

const inquirer = require("inquirer");
const { generateSVG: generateSVG } = require("./lib/shapes");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "shapeType",
        message: "Choose a shape.",
        choices: ["Circle", "Rectangle", "Triangle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be?",
      },
      {
        type: "input",
        name: "text",
        message:
          "Enter three characters of text you would like your shape to have.",
      },
      {
        type: "input",
        name: "textColor",
        message: "What color do you want your text to have?",
      },
    ])
    .then((answers) => {
      let createdSVG = generateSVG(answers);

      fs.writeFile("logo.svg", createdSVG, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    });
}

init();
