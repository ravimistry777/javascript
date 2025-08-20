// 1. Write a program to implement binary search to find the index of a target element in a sorted array.

// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) return mid;
//         else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return "element not found";
// }

// let ar = [1, 3, 5, 7, 9, 11];
// console.log(binarySearch(ar, 7));
// console.log(binarySearch(ar, 4));

//OUTPUT :-
//3
//-1


// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

// function firstOccurrence(arr, target) {
//     let left = 0, right = arr.length - 1, result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             result = mid;
//             right = mid - 1;
//         } else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return result;
// }

// function lastOccurrence(arr, target) {
//     let left = 0, right = arr.length - 1, result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             result = mid;
//             left = mid + 1;
//         } else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return result;
// }

// let array = [2, 4, 4, 4, 6, 8, 8, 10];
// let target = 4;

// let first = firstOccurrence(array, target);
// let last = lastOccurrence(array, target);
// let count = (first === -1) ? 0 : (last - first + 1);

// console.log("First Occurrence:", first);
// console.log("Last Occurrence:", last);
// console.log("Count:", count);

//OUTPUT :-
//First Occurrence: 1
//Last Occurrence: 3
//Count: 3


// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array.

function findPivot(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findPivot(arr));

let arrr = [30, 40, 50, 10, 20];
console.log(findPivot(arrr));

//OUTPUT :-
//4
//3