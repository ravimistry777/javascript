// 1.

// let units = Number(prompt("Enter units :- "));
// let bill = 0;

// if (units <= 50) {
//     bill = units * 1;
// } else if (units <= 150) {
//     bill = (50 * 1) + ((units - 50) * 2);
// } else if (units <= 250) {
//     bill = (50 * 1) + (100 * 2) + ((units - 150) * 3);
// } else {
//     bill = (50 * 1) + (100 * 2) + (100 * 3) + ((units - 250) * 4);
// }

// if (units > 150) {
//     let surcharge = bill * 0.20;
//     bill = bill + surcharge;
// }

// console.log("Total units :- ", units);
// console.log("Total bill amount :- " + bill);

// OUTPUT =  
// if unit = 500;
// calculation =  
// for first 50 unit 50*1 = 50rs,
// for next 100 unit 100* 2 = 200rs,
// for next 100 unit 100*3 = 300rs,
// last 250unit 250*4 = 1000rs,
// the unit is above 250 then the surcharge is total bill * 0.20 = 310rs,
// output will be = Total units :-  500
// Total bill amount :- 1860

// 2.

// let month = Number(prompt("Enter month number (1 to 12):"));

// switch (month) {
//     case 1:
//         console.log("Winter");
//         break;

//     case 2:
//         console.log("winter");
//         break;

//     case 3:
//         console.log("winter");
//         break;

//     case 4:
//         console.log("winter");
//         break;

//     case 5:
//         console.log("summer");
//         break;

//     case 6:
//         console.log("summer");
//         break;

//     case 7:
//         console.log("summer");
//         break;

//     case 8:
//         console.log("summer");
//         break;

//     case 9:
//     console.log("monsoon");
//     break;

//     case 10:
//     console.log("monsoon");
//     break;

//     case 11:
//     console.log("monsoon");
//     break;

//     case 12:
//     console.log("monsoon");
//     break;

//     default:
//         console.log("Invalid month");
// }

// output = if user enter 1-12 any num , that will show if 1-4 then winter , 5-8 summer , 9-12 monsoon else will show invalid month

// 3.

// let Principalamount = Number(prompt("Enter Principal Amount:-"));
// let NOY = Number(prompt("Enter duration in year:-"));
// let Rate;

// if (NOY > 3) {
//   if (NOY <= 5) {
//     Rate = 3;
//   } else if (NOY <= 8 && NOY > 5) {
//     Rate = 5;
//   } else if (NOY <= 12 && NOY > 8) {
//     Rate = 12;
//   } else {
//     Rate = 15;
//   }
// } else {
//   Rate = 15;
// }

// let interest = (Principalamount * Rate * NOY) / 100;

// console.log("Principal Amount :- ", Principalamount);
// console.log("Rate of Interest :- ", Rate);
// console.log("Number of Years :- ", NOY);
// console.log("Total Interest :- ", interest);

// output = 
// Principalamount = 1000
// NOY = 6
// Then Rate = 5
// Interest = (1000 × 5 × 6) / 100 = 300

// 4.

// let age = Number(prompt("Please enter your age:-"));

// if (age < 0) {
//     console.log("add valid age");
// }
// else if (age >= 18) {
//     console.log("Person is eligible for vote");
// } else {
//     console.log("person is not eligible for vote");
// }

// output = if input age is in minus then it will show add valid age , 
// if input age is <= 18 output will be person is eligible for vote else person is not eligible for vote
// if he/she is between 1 to 17.

// 5.

// let age = Number(prompt("Please enter age to check Age Groups."));


// if (age < 0) {
//     console.log("Invalid input!!");
// }
// else if (age > 0 && age <= 12) {
//     console.log("he/she is a CHILD");
// }
// else if (age >= 13 && age <= 19) {
//     console.log("he/she is a TEENAGER");
// }
// else if (age >= 20 && age <= 35) {
//     console.log("he/she is a YOUNG ADULT");
// }
// else if (age >= 36 && age <= 59) {
//     console.log("he/she is a ADULT");
// }
// else if (age >= 60 && age <= 120) {
//     console.log("he/she is a SENIOR CITIZEN");
// }
// else if (age > 120) {
//     console.log("IN THIS ERA people dosen't live more than 120 years still if any exist then he/she is in Extreme Elderly Age group,but As of today, May 22, 2025, the oldest living person in the world is Ethel Caterham from the United Kingdom, aged 115 years and 274 days.")
// }

// output = 
// age < 0        Invalid input!!
// 1 - 12         he/she is a CHILD
// 13 - 19        he/she is a TEENAGER
// 20 - 35        he/she is a YOUNG ADULT
// 36 - 59        he/she is a ADULT
// 60 - 120       he/she is a SENIOR CITIZEN
// age > 120      Displays fun fact about the oldest living person