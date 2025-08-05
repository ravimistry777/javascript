// 1. 2D array print and also print its transpose array

let array = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log("Original Array:- ");
for (let i = 0; i < array.length; i++) {
  console.log(array[i].join(" "));
}

let transpose = [];
for (let i = 0; i < array[0].length; i++) {
  transpose[i] = [];
  for (let j = 0; j < array.length; j++) {
    transpose[i][j] = array[j][i];
  }
}

console.log("\nTransposed Array:- ");
for (let i = 0; i < transpose.length; i++) {
  console.log(transpose[i].join(" "));
}



// 2. Array Descending order sorting using selection sort


// let arr = [23, 5, 12, 89, 34, 64, 22];

// console.log("Original Arr:- ", arr);

// for (let i = 0; i < arr.length - 1; i++) {
//   let Index = i;

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[Index]) {
//       Index = j;
//     }
//   }

//   if (Index !== i) {
//     let temp = arr[i];
//     arr[i] = arr[Index];
//     arr[Index] = temp;
//   }
// }
// console.log("Sorted Array in Descending order:- ", arr);



// 3. Array Ascending order sorting using Merge sort


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr);

let sortedArr = mergeSort(arr);
console.log("Sorted Array in Ascending order:- ", sortedArr);

