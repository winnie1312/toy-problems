let arr = [ 'My', 'here', 'Minho', "hahah", "eeeee"];

//c1
// let emptyA = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i].length > emptyA.length) {
//       emptyA = arr[i];
//   }
// }
// console.log(emptyA);
//check new project

//c2
let sorted = arr.sort(function(a, b){
  return b.length - a.length;
});
console.log(sorted);
console.log(sorted[0]);
