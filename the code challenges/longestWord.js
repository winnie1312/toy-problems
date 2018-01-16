// function LongestWord(str) {
//   let letters= str.replace(/[\W]/g,' '); //put only letters& numbers to array. /[\W]/gi is punctuation
//   let result = letters.split(' ').sort((a,b) => b.length - a.length); //sort from the largest-> smallest
//   return result[0];
// };
// console.log(LongestWord(' my name iss4!@ bu'));


//c2
function LongestWord(str) {
  let letterNum =str.replace(/[\W]/g,' ');
  let trimed = letterNum.split(/\s+/g); //remove the space
  console.log(trimed);
  let result = trimed.sort((a,b) => b.length - a.length);
  return result[0];

};
console.log(LongestWord(' my name iss4!@ bu'));
