function generateSVG(data) {
  let shape = "";

  if (data.text.length > 3) {
    return console.log(
      " Error: The text you chose is greater than 3 characters."
    );
  }

  if (data.shapeType === "Circle") {
    shape = new Circle(data.text, data.textColor, data.shapeColor);
  } else if (data.shapeType === "Rectangle") {
    shape = new Rectangle(data.text, data.textColor, data.shapeColor);
  } else {
    shape = new Triangle(data.text, data.textColor, data.shapeColor);
  }

  return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

      ${shape.render()}

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
        shape.textColor
      }">${shape.text}</text>
      </svg>`;
}

function Shape(text, textColor, shapeColor) {
  this.text = text;
  this.textColor = textColor;
  this.shapeColor = shapeColor;
  this.shapeCode = "";
  this.render = () => {
    return this.shapeCode;
  };
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

module.exports = {
  generateSVG: generateSVG,
  Shape: Shape,
  Circle: Circle,
  Rectangle: Rectangle,
  Triangle: Triangle,
};
