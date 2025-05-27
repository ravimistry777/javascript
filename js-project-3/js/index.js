// 1. write a javascript program to display the multiplication table of a given integer using a while loop

// let number = Number(prompt("Enter a number to print multiplication table."));

// let i = 1;

// while (i <= 10) {
//   console.log(number + " x " + i + " = " + (number * i));
//   i++;
// }

// output = inshort it will make a muliplication table like :-
// if you enterd 5;
// output will be show like this - 
// 5 x 1 = 5  
// 5 x 2 = 10  
// 5 x 3 = 15  
// 5 x 4 = 20  
// 5 x 5 = 25  
// 5 x 6 = 30  
// 5 x 7 = 35  
// 5 x 8 = 40  
// 5 x 9 = 45  
// 5 x 10 = 50



// 2. write a javascript program to calculate the factorial of a given number using a while loop.

// let n = Number(prompt("Please give number to find a factorial of that number."));

// let fact = 1;
// let i = 1;

// while (i <= n) {
//   fact = fact * i;
//   i++;
// }

// console.log("Factorial of " + n + " is " + fact);


// Output :- how it work ?

// Initial: fact = 1, i = 1

// 1st iteration:- fact = 1 * 1 = 1      → i = 2  
// 2nd:- fact = 1 * 2 = 2      → i = 3  
// 3rd:- fact = 2 * 3 = 6      → i = 4  
// 4th:- fact = 6 * 4 = 24     → i = 5  
// 5th:- fact = 24 * 5 = 120   → i = 6

// in easy language - "The factorial of any positive whole number is the multiplication of all numbers up to that number."

// 5! = 5 × 4 × 3 × 2 × 1 = 120
// 4! = 4 × 3 × 2 × 1 = 24



// 3. write a javascript program to find the armstrong number list of a given number using a do while loop

// let n = Number(prompt("Enter a number to list Armstrong numbers up to it:"));

// let num = 1;

// do {
//   let temp = num;
//   let sum = 0;
//   let digits = num.toString().length;   /* (sorry sir i used short method here but if i use that method which you taught us this code will be more long) */

//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit ** digits;
//     temp = Math.floor(temp / 10);
//   }

//   if (sum === num) {
//     console.log(num + " is an Armstrong number");
//   }

//   num++;
// } while (num <= n);


// Output :- its a explanation of this program ;

// 153 = 1(cube 1*1*1) + 5(cube 5*5*5) + 3(cube - 3*3*3) = 1 + 125 + 27 = 153 = this called armstrong number

// if the input will 200 then the output will be like this = 

// 1 is an Armstrong number
// 2 is an Armstrong number
// 3 is an Armstrong number
// 4 is an Armstrong number
// 5 is an Armstrong number
// 6 is an Armstrong number
// 7 is an Armstrong number
// 8 is an Armstrong number
// 9 is an Armstrong number
// 153 is an Armstrong number



// 4. write a javascript program to find  the palindrome number list of a given number using a while loop

// let n = Number(prompt("Enter a number to find palindrome numbers !!"));

// let num = 1;

// while (num <= n) {
//   let temp = num;
//   let rev = 0;

//   while (temp > 0) {
//     let digit = temp % 10;
//     rev = rev * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }
//   if (rev === num) {
//     console.log(num + " is a Palindrome number");
//   }
//   num++;
// }

// Output :- Palindrome ae number hoi chhe jene undho lakhvathi pan same rahe

// like :- 121 → reverse is 121 

// if input will be 100 :- then the output will show like this = 

// 1 is a Palindrome number
// 2 is a Palindrome number
// 3 is a Palindrome number
// 4 is a Palindrome number
// 5 is a Palindrome number
// 6 is a Palindrome number
// 7 is a Palindrome number
// 8 is a Palindrome number
// 9 is a Palindrome number
// 11 is a Palindrome number
// 22 is a Palindrome number
// 33 is a Palindrome number
// 44 is a Palindrome number
// 55 is a Palindrome number
// 66 is a Palindrome number
// 77 is a Palindrome number
// 88 is a Palindrome number
// 99 is a Palindrome number



// 5. write a javascript program to calculate the fibonacci series of a given number using a while loop

// let n = Number(prompt("Fibonacci series ke kitne numbers chahiye?"));

// let a = 0;
// let b = 1;
// let count = 0;

// while (count < n) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
//   count++;
// }

// Output = 

// if user enter n value 10;

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34



// 6. write a javascript program to add all the integers between 0 and 30 and display the total using do while loop

// let total = 0;
// let i = 0;

// do {
//   total += i;
//   i++;
// } while (i <= 30);

// console.log("Total sum from 0 to 30 is: " + total);


// Output = Total sum from 0 to 30 is: 465

// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop.

// let i = 1;

// do {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);

// Output = if element multiple by 3 output will be Fizz , if multiple by 5 output will be Buzz and if element can multiple by both the output will be FizzBuzz.



// 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop. There will be no hyphen(-) at starting and ending position. 

// let result = "";

// for (let i = 1; i <= 10; i++) {
//   if (i < 10) {
//     result += i + "-";
//   } else {
//     result += i;
//   }
// }

// console.log(result);

// Output = 1-2-3-4-5-6-7-8-9-10
// numbers from 1 to 10 into a string with hyphens in between, and avoids adding a hyphen after the last number to match the required format.



// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop

// let sum = 0;
// let out = "";

// for (let i = 1; i <= 10; i++) {
//   let square = i * i;
//   sum += square;

//   if (i < 10) {
//     out += square + "+";
//   } else {
//     out += square;
//   }
// }

// console.log(out + " = " + sum);

// Output = here we need to square each element of 1 to 10 , and need to print every element in one line and at last the total of every squared element which is 385

// Main output = 1+4+9+16+25+36+49+64+81+100 = 385



// 10. 

// for (let i = 1; i <= 5; i++) {
//   let bin = "";
//   for (let j = 5; j >= 6 - i; j--) {
//     bin += j + " ";
//   }
//   console.log(bin);
// }


// Output = 

// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1 



// 11. 

// let count = 1;

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += count + " ";
//     count++;
//   }
//   console.log(row);
// }

// oUTPUT = 

// 1  
// 2 3  
// 4 5 6  
// 7 8 9 10  
// 11 12 13 14 15  