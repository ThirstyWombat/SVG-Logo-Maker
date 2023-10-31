const { generateSVG, Shape, Circle, Rectangle, Triangle } = require("./shapes");

describe("generateSVG", () => {
  test("Should render the svg code using the prompt data", () => {
    const promptData = {
      shapeType: "Rectangle",
      shapeColor: "red",
      text: "RED",
      textColor: "white",
    };
    let functionResult = generateSVG(promptData);

    let expectedSVG = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <rect x="10" y="10" width="300" height="200" stroke="red" fill="red" stroke-width="5"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">RED</text>
    </svg>`;

    expect(functionResult.replace(/\s/g, "")).toEqual(
      expectedSVG.replace(/\s/g, "")
    );
  });
});

describe("Circle", () => {
  test("Should render the svg code for a circle", () => {
    let circle = new Circle("APA", "white", "red");

    let expectedSVG = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" stroke="red" fill="red" />`;

    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe("Rectangle", () => {
  test("Should render the svg code for a rectangle", () => {
    let rectangle = new Rectangle("APA", "white", "red");

    let expectedSVG = `<rect x="10" y="10" width="300" height="200" stroke="red" fill="red" stroke-width="5"/>`;

    expect(rectangle.render()).toEqual(expectedSVG);
  });
});

describe("Triangle", () => {
  test("Should render the svg code for a triangle", () => {
    let triangle = new Triangle("APA", "white", "red");

    let expectedSVG = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" style="fill:red;stroke:red;" />`;

    expect(triangle.render()).toEqual(expectedSVG);
  });
});
