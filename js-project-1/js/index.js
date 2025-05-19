// area of a triangle

let base = 10;
let height = 8;

let area = 0.5 * base * height;

console.log("Area of the triangle is:", area);

// Celsius to Fahrenheit

let celsius = 45;
let fahrenheit = (celsius * 9/5) + 32;

console.log("total fahrenheit:- ",fahrenheit);

// area of rectangle

let length = 55;
let width = 22;

let rectanglearea = length * width;

console.log("Area of Rectangle:- " , rectanglearea);

// area of circle

let pie = 3.14;
let r = 50;

let circlearea = pie * r* r;

console.log("area of circle:- " , circlearea);

// feet into inches

let feet = 10;
let inches = feet * 12;

console.log("total inches = " , inches);

// calculate given formula

// 1.

let a = 4;
let b = 2;

let left = a**2 - b**2;
let right = (a - b) * (a + b);

console.log("a² - b² =", left);
console.log("(a - b)(a + b) =", right);

// 2.(uper a and b ni already diclare kari didhi che value atle niche ekoi ma lidhi nathi!)

let leftt = (a - b) ** 2;
let rightt = a**2 - 2*a*b + b**2;

console.log("(a - b)² =", leftt);
console.log("a² - 2ab + b² =", rightt);

// 3.

let c = 2;

let left3 = (a + b + c) ** 2;
let right3 = a**2 + b**2 + c**2 + 2*a*b + 2*a*c + 2*b*c;

console.log("(a + b + c)² =", left3);
console.log("a² + b² + c² + 2ab + 2ac + 2bc =", right3);

// 4.

let left4 = (a-b-c) ** 2;
let right4 = a**2 + b**2 + c**2 - 2*a*b - 2*a*c + 2*b*c;

console.log("(a - b - c)² =", left4);
console.log("a² + b² + c² - 2ab - 2ac + 2bc =", right4);

// 5.

let left5 = (a - b) ** 3;
let right5 = a**3 - 3*a**2*b + 3*a*b**2 - b**3;

console.log("(a - b)³ =", left5);
console.log("a³ - 3a²b + 3ab² - b³ =", right5);
