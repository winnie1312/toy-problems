//Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers
//the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), 
//and a final 5th element (x) which will also be a positive integer, 
//and return the string true if both sets of ranges overlap by at least x numbers. 
//example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
//The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
//The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
//If both ranges do not overlap by at least x numbers, then your program should return the string false. 

//c1
function OverlappingRanges (arr) { // arr = [a,b,c,d,x]
  let range1 = [arr[0], arr[1]]; //[a,b]
  let range2 = [arr[2],arr[3]];  //[c,d]
  let minOverlap = arr[4] -1; // x-1
  function Overlap (range1, range2) {
    if (range1[0] < range2[0]) {       //a < c
      return (range1[1] > range2[1]? range2[1] : range1[1]) - range2[0]; // compare b & d
    } else {  // a > c
      return (range1[1] > range2[1]? range2[1] : range1[1]) - range1[0]; // compare b & d
    }
  }
  return Overlap(range1, range2) >= minOverlap;
};
console.log(OverlappingRanges([5,11,3,7,2]));

//c2
// function OverlappingRanges (arr) {
//   let arr1 = [];
//   let arr2 = [];
//   let newarr = [];
//   for (let i = arr[0]; i<= arr[1]; i++ ) {
//     arr1.push(i);
//   };
//   for (let j = arr[2]; j <= arr[3]; j++) {
//     arr2.push(j);
//   }
//   for (let repeat1 =0; repeat1 < arr1.length; repeat1++) {
//     for (let repeat2 =0; repeat2 <arr2.length; repeat2++) {
//       if (arr1[repeat1] === arr2[repeat2]){
//         newarr.push(arr1[repeat1])
//       }
//     }
//   }
//   return newarr.length >= arr[4];
// }
// console.log(OverlappingRanges([5,11,3,7,2]));





