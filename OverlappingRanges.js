
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





