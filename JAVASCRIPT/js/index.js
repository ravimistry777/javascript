// 📌 JavaScript Me Output Ke 4 Main Tarike Hote Hain:

// LEC-1

// 1.

// console.log(30 + 20);
// console.log("Hello world");
// console.warn("this show warning");
// console.error("this show error if we want to show in code");

// 2.

// alert("hello there");

// 3.

// document.write("hello world");

// 4.

// document.getElementById("test").innerHTML = "changed text";

// LEC-2 VARIABLES

// let . const , var

// main data types
// primitive data types
// - string = "ravi" , number = 1 2 3 , BigInt = big number , boolean = true , false , undefined = undefined , null = null , symbol

// non-primitive data types
// object

// LEC - 3 

// OPERATORS

// 1️⃣ Arithmetic Operators

// + = addition
// - = subtraction
// * = multiply
// / = division
// % = modules
// ** = exponent

// Comparison Operators

// == = equal to
// === = equal and same type
// != = not equal
// !== = not equal and not same type
// < <= > >=


// Assignment oprators

// += . -= , *= , /= , %= , **=

// Logical operators

// &&
// | A     | B     | A && B |
// | ----- | ----- | ------ |
// | true  | true  | true   |
// | true  | false | false  |
// | false | true  | false  |
// | false | false | false  |

// ||
// | A     | B     | A || B |
// | ----- | ----- | -------- |
// | true  | true  | true     |
// | true  | false | true     |
// | false | true  | true     |
// | false | false | false    |

// !
// | A     | !A    |
// | ----- | ----- |
// | true  | false |
// | false | true  |


// LEC- 4

// Grade

let marks = 85;
let grade;

if (marks >= 90) {
    console.log("A grade");
}
else if(marks < 90 && marks >= 80){
    console.log("B grade");
}
else if(marks < 80 && marks >= 65){
    console.log("C grade");
}
else if(marks < 65 && marks >= 35){
    console.log("D grade");
}
else{
    console.log("FAIL");
}

// // BILL

let totalunit = 120;
let unitprice = 5;
let gst = 1.09;
let cgst = 1.09;
let netbill;

netbill = totalunit * unitprice * gst * cgst;

console.log("NET BILL IS :- " , netbill);

// // Interest

let amount = 5000;
let roi = 9;
let time = 3; //in years
let netamount;

let totalamount = (amount*roi*time)/100;

netamount = totalamount + amount;

console.log("INTEREST = " , totalamount);
console.log("TOTAL AMOUNT:- ", netamount);

// Employee Salary

let BasicSalary = 10000;
let HRA = BasicSalary * 0.10;
let DA = BasicSalary * 0.05;

let netsalary = BasicSalary + HRA + DA;
let tax = netsalary * 0.10;
let grosssalary = netsalary - tax;
console.log("Basic salary:- " , BasicSalary);
console.log("HRA:- " , HRA);
console.log("DA:- " , DA);
console.log("TAX APPLIED 10%:- ",tax)
console.log("NET SALARY:- ", grosssalary);


// area of triangle


let base = 20;
let height = 40;

let area = 0.5 * base * height;

console.log("AREA OF TRIANGLE :- " , area);

// area of circle

let pie = 3.14;
let r = 30;

let circlearea = pie * r* r;

console.log("area of circle:- " , circlearea);

// area of rectangle 

let length = 30;
let width = 40;

let rectanglearea = length * width;

console.log("Area of Rectangle:- " , rectanglearea);

// dollar to rupee

let dollar = 10;
let rate = 83;

let rupee = dollar * rate;

console.log("Total rupees is :- " , rupee);

// feet into inches

let feet = 10;
let inches = feet * 12;

console.log("total inches = " , inches);

// feet into meters

let feeet = 6;
let meters = feeet * 0.3048;

console.log("total meters = " , meters);

// Celsius to Fahrenheit

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;

console.log("total fahrenheit:- ",fahrenheit);

