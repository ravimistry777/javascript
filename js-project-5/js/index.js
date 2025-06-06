// 1.

// let myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.toString());
// console.log(myColor.join("+"));

// console.log(myColor.slice(0, 3).toString());
// console.log(myColor[0]);

// console.log(myColor.slice(1, 3).toString());

// myColor.push("orange");
// console.log(myColor.toString());


// Output = 

// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange



// 2.

// let arr = [11, 22, 33, 44, 55];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Sum using for loop:", sum);

// let total = 0;
// arr.forEach(function (num) { total += num;});

// console.log("Sum using forEach:", total);


// Output = 

// Sum using for loop: 165
// Sum using forEach: 165



// 3.

// let numbers = [1,3,84,1,845,51,61];

// function minmax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i]
//     if(arr[i] > max) max = arr[i];
//   }

//   console.log("minimum" , min);
//   console.log("maximum" , max);
// }

// minmax(numbers);

// Output = 

// Minimum: 1
// Maximum: 845



// 4.

// let char = ['A', 'B', 'c', 'd'];

// for (let i = 0; i < char.length; i++) {
//     console.log(char[i] + " = " + char[i].charCodeAt(0));
// }


// Output = 

// A = 65
// B = 66
// c = 99
// d = 100



// 5.

// let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positive = numbers.filter(function (num) {
//     return num >= 0;
// });

// console.log("Positive numbers:", positive);

// Output = Positive numbers: (6) [0, 1, 5, 12, 19, 20]



// 6.

// let arr = [2, 5, 6, 3, 8, 9];

// let squareArr = arr.map(function (num) {
//     return num * num;
// });

// console.log("Original array:", arr);
// console.log("Square array:", squareArr);

// Output = 

// Original array: (6) [2, 5, 6, 3, 8, 9]
// Square array: (6) [4, 25, 36, 9, 64, 81]



// 7.

// let numbers = [23, 20, 17, 12.5, 0, 1, 5, 12, 19, 20];

// let asc = numbers.slice().sort(function (a, b) {
//     return a - b;
// });

// let desc = numbers.slice().sort(function (a, b) {
//     return b - a;
// });

// console.log("Original:", numbers);
// console.log("Ascending:", asc);
// console.log("Descending:", desc);

// Output = 

// Original: (10) [23, 20, 17, 12.5, 0, 1, 5, 12, 19, 20]
// Ascending: (10) [0, 1, 5, 12, 12.5, 17, 19, 20, 20, 23]
// Descending: (10) [23, 20, 20, 19, 17, 12.5, 12, 5, 1, 0]



// let myColor = ["Red", "Green", "White", "Black"];

// let ascColor = myColor.slice().sort();
// let descColor = myColor.slice().sort().reverse();

// console.log("Original colors:", myColor);
// console.log("Ascending (A-Z):", ascColor);
// console.log("Descending (Z-A):", descColor);

// Output = 
// Original colors: (4) ['Red', 'Green', 'White', 'Black']
// Ascending (A-Z): (4) ['Black', 'Green', 'Red', 'White']
// Descending (Z-A): (4) ['White', 'Red', 'Green', 'Black']



// 8.

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

// let filter = words.filter(function (word) {
//     return word.length >= 8;
// });

// console.log(filter);

// Output: ['Javascript']



// 9.

// let x = "airplane";
// console.log(x.charAt(x.length - 6));

// x = "oxoxoxox";
// let result = "";
// for (let i = 0; i < x.length; i++) {
//     result += (i % 2 === 0) ? x[i].toLowerCase() : x[i].toUpperCase();
// }
// console.log(result);

// x = "A New Java Book";
// console.log(x.toLowerCase());
// console.log(x.toUpperCase());

// Output = 

// r
// oXoXoXoX
// a new java book
// A NEW JAVA BOOK



// 10.

// let arr = [1, 2, 3, 4, 5];
// let reverse = arr.reverse();
// console.log(reverse);

// Output = (5) [5, 4, 3, 2, 1]



// 11.

// let colors = ["red", "green", "blue"];
// let value = "green";

// if (colors.includes(value)) {
//     console.log("Found!");
// } else {
//     console.log("Not found.");
// }

// Output = Found!



// 12.

// let name = "Ravi N. Siddhapura";

// console.log("My name is:", name);
// console.log("Total characters:", name.length);


// Output = 

// My name is: Ravi N. Siddhapura
// Total characters: 18



// 13.

// let text = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

// let updated = text.replaceAll("dog", "cat");
// console.log(updated);

// Output = I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning



// 14.

// let str = "Hire the top 1% freelance developers";
// let newArr = str.split(" ").slice(0, 4);
// console.log(newArr);

// Output = (4) ['Hire', 'the', 'top', '1%']



// 15.

// let arr = [5, 32, 'Daniel'];
// let str = arr.join(",");
// console.log(str);

//Output = 5,32,Daniel