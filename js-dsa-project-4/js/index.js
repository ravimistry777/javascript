// Q1. Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length)

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) return "Stack is Empty";
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     length() {
//         return this.items.length;
//     }
// }


// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log("Deleted:", stack.pop()); // LIFO
// console.log("Is Empty?", stack.isEmpty());
// console.log("Length:", stack.length());

// OUTPUT :- 
// Deleted: 20
// Is Empty? false
// Length: 1


// Q2. Write a program for Next Greater Element using Stack.


// function nextGreaterElement(arr) {
//     let stack = [];
//     let result = new Array(arr.length).fill(-1);

//     for (let i = 0; i < arr.length; i++) {
//         while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
//             let index = stack.pop();
//             result[index] = arr[i];
//         }
//         stack.push(i);
//     }
//     return result;
// }

// let arr = [4, 5, 2, 25];
// console.log("Array:", arr);
// console.log("Next Greater Elements:", nextGreaterElement(arr));


// OUTPUT:- 
// Array: Array(4) [ 4, 5, 2, 25 ]
// Next Greater Elements: Array(4) [ 5, 25, 25, -1 ]


// Q3. Write a program for a reverse string using Stack.

function reverseString(str) {
    let stack = [];
    let result = "";

    for (let ch of str) {
        stack.push(ch);
    }

    while (stack.length) {
        result += stack.pop();
    }

    return result;
}

let str = "RED AND WHITE";
console.log("Original String:", str);
console.log("Reversed String:", reverseString(str));

// OUTPUT:- 
// Original String: RED AND WHITE
// Reversed String: ETIHW DNA DER