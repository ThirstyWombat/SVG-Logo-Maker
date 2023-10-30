//create a variable that contains the html code of the svg shape and concat the options into the code
//set prompt results from inquirer into the respective shape class let createdShape = new whatever
//write the html file with the concated parameters into a svg file in the example folder
//save the svg specific html as a key inside the object with the other keys of that object concat into it?
//create a function which creates a shape based on the inquirer prompt, if rectangle, function createRectangle, etc
//.then run the created object as a parameter for the generateSvg function which contains the concat string code.
function generateSVG(data) {
  let shape = "";

  if (data.shapeType === "Circle") {
    shape = new Circle(data.text, data.textColor, data.shapeColor);
  } else if (data.shapeType === "Rectangle") {
    shape = new Rectangle(data.text, data.textColor, data.shapeColor);
  } else {
    shape = new Triangle(data.text, data.textColor, data.shapeColor);
  }
  console.log(shape);
  return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
  
    ${shape.shapeCode}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
    </svg>`;
}

function Shape(text, textColor, shapeColor) {
  this.text = text;
  this.textColor = textColor;
  this.shapeColor = shapeColor;
}

function Circle(text, textColor, shapeColor) {
  Shape.call(this, text, textColor, shapeColor);
  this.shapeCode = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" stroke="${shapeColor}" fill="${shapeColor}" />`;
}

function Rectangle(text, textColor, shapeColor) {
  Shape.call(this, text, textColor, shapeColor);
  this.shapeCode = `<rect x="10" y="10" width="300" height="200" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>`;
}

function Triangle(text, textColor, shapeColor) {
  Shape.call(this, text, textColor, shapeColor);
  this.shapeCode = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" style="fill:${shapeColor};stroke:${shapeColor};" />`;
}

module.exports = generateSVG;
