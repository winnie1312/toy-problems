// str 'oxox' --> return true; numbers of 'x' = number of 'o'

// //smart way
// let ox =(str)=> {
//   let regexPatternX = /[x]/gi;
//   let regexPatternO = /[o]/gi;
//   let xLen = str && str.match(regexPatternX)? str.match(regexPatternX).length :0;
//   let oLen = str && str.match(regexPatternO)? str.match(regexPatternO).length :0;
//
//   return xLen === oLen;
// };
//
// console.log(ox('o'));


// //basic way
// let ox =(str) => {
//   let o=str.split('x').join('');
//   let x=str.split('o').join('');// if ox ='o' -> x is empty string -> x.length =0;
//   return x.length === o.length;
// }
// console.log(ox('o'));


//filter way
function WordCount(str) {
  let arr = str.split("");

  // filter() method takes a test function with 3 parameters:
  // the current element(elem), its index (optional), and the array it came from (arr)(optional)
  // and if the test passes (elem ==='x') it adds this element to the new array
  let x = arr.filter(elem => elem === 'x'); //es6 syntax
  let oLen = arr.length - x.length;
  return x.length === oLen;
}
console.log(WordCount("xoxoxoxx"));
