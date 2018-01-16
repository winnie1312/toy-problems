//word
// //return only letter in str
// // regex
// let str= 'Saran&%%!!!';
// const onlyStr = str.match(/[a-z]/gi);
// const result = onlyStr.join("");
// console.log(result);


// the sentences
let word ="Check if it12344 works$$#";
let array =word.split(' ');
console.log(array);
let onlyLetter =[];
for (let i=0; i<array.length; i++) {
    onlyLetter.push((array[i].match(/[a-z]/gi)).join(""));//check if .join("") absents
 }
const result1 =onlyLetter.join(' ');

console.log(result1);
