//c1: change all non-words to ''
// let Palindrome =(str)=> {
//   let regex =/[^A-Za-z]/g;// punctuation & number values
//   let str1 = str.toLowerCase().replace(regex,'');
//   console.log(str1)
//   let str2 =str1.split('').reverse().join('');
//   return str1 === str2;
// }
// console.log(Palindrome('1@EY@2'));

//c2 : get only letters out to newstr before reversing
let Palindrome =(str)=> {
  let str1 =str.toLowerCase().match(/[a-z]/gi);
  let str2 = str1.reverse();
  return str1.join('') === str2.join('');

}
console.log(Palindrome('eyE '));

// let str ='0ab5C@#$%^&_';
// let regex =/[^A-Za-z0-9]/g
// let regex1 =/[\W]/g;
// let result = str.replace(regex1,'');
//
// console.log(result);
//
//
