//1. write a javascript program to print a greeting message using with argument no return type function when call a function without 
// argument at that time print message good morning.


function greet(name) {
  console.log(name ? "Hello " + name : "Good Morning");
}

// greet();
// greet("Girish sir");


// OUTPUT = i used a ternary operator in this funtion to print "Good Morning" when no argument 
// is passed and prints a personalized greeting with a name.

// = Good Morning 
// Hello Girish sir



// 2. write a javascript program to find circle area (area = pi*r*r) using return type with argument function.


function Area(r) {
  let pi = 3.14;
  let area = pi * r * r;
  return area;
}

// let ans = Area(2);
// console.log("Area of circle is:-",ans);


// OUTPUT = Area of circle is:- 12.56



// 3. write a javascript program to find triangle area ( area = (l*h)/2 ) using return type with argument function.

function triangle(length, height) {
  let area = (length * height) / 2;
  return area;
}

// let answer = triangle(12, 3);
// console.log("Area of triangle is:-" , answer);


// OUTPUT = Area of triangle is:- 18



// 4. write a javascript program to find rectangle area = l * h using return type with argument function.

function rectangle(l,h){
    let area = l * h;
    return area;
}

// let answer = rectangle(4,3);
// console.log("area of rectangle is:- ",answer);

// OUTPUT = area of rectangle is:-  12



// 5. write a javascript program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

function ravi(a,b,c){
    let cal = ((b*b)-(4*a*c))/(2*a);
    return cal;
}

// let ans = ravi(10,10,10);
// console.log("answer of equation:- ",ans);

// OUTPUT = answer of equation:-  -15



// 6. write a javascript program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function.

function maths(a,b){
    let calc = (a*a) + (2*a*b) + (b*b);
    return calc;
}

// let ans = maths(2,4);
// console.log("answer of this equation is :- ", ans);

// OUTPUT = answer of this equation is :-  36



// 7. write a javascript program to convert fahrenheit to celsius (c = (f-32)/1.8 ) using return type with argument function.

function Celsius(f) {
  return (f - 32) / 1.8;
}

// let c = Celsius(44);
// console.log("°F is:- " , c + "°C");

// OUTPUT =°F is:- 6.666666666666666°C



// 8. write a javascript program to convert celsius to fahrenheit (f= (c*1.8)+32 ) using return type with argument function

function convert(c) {
  return (c * 1.8) + 32;
}

// let y = convert(42);
// console.log("°C is :- ",y + "°F");

// OUTPUT = °C is :-  107.60000000000001°F



// 9. write a javascript program to find if a given number is odd or even using an argument with no return type.

function number(n) {
  if (n % 2 === 0) {
    console.log(n + " is Even number");
  } else {
    console.log(n + " is Odd number");
  }
}

// let r = Number(prompt("enter the number:- "));
// number(r);

// OUTPUT = this function will check number is odd or even , if user will enter 10 output will be 10 is Even number.



// 10. write a javascript program to swap a value without third variable using with argument no return type.

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log("After Swapping:");
  console.log("a =", a);
  console.log("b =", b);
}

// console.log("Before Swapping:");
// console.log("a = 5");
// console.log("b = 10");

// swap(5, 10);


// OUTPUT = 

// Before Swapping:
// a = 5
// b = 10

// After Swapping:
// a = 10
// b = 5