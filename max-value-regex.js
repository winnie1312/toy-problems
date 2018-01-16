//best way to solve
//1. strip away punctuation 'hello@$$%%'-> 'hello'
//2. separate sentence into list of words (array)
//3. loop through the list to compare the words to find the max one, if the same, the 1st one come.
let LongestWord =(str)=> {
  let arr = str.match(/[a-z0-9]+/gi);
  console.log(arr);
  let result = arr.sort(function(a,b) {return b.length - a.length});
  console.log(result);
  return result[0];//return to stop 
}
console.log(LongestWord('My name here Minho Sara9&%%!!! heheh'));

// very long way if u dont know + in /[a-z0-9]+/
// // let longestWord = () {
// let str = 'My name here Minho Saran&%%!!! heheh'
// let array = str.split(' ');
// console.log(array);
// let obj ={};
//   for(let i =0; i< array.length; i++) {
//     let currentWord = array[i].match(/[a-z0-9]/gi).join('');
//     obj[currentWord] = currentWord.length;
//   }
//   console.log(obj);
//   let x =Object.keys(obj).reduce(function(a,b) {return obj[a] >obj[b]? a: b})
//     console.log(x);
//



// also very long way if you dont know regex /[a-z0-9]+/gi
//use array
// let longestWord = (str)=> {
//   let array = str.split(' ');
//   let newArray =[];
//   //get letters only
//   for(let j=0; j<array.length; j++) {
//     newArray.push(array[j].match(/[a-z0-9]/gi).join(''));
//   }
//   console.log(array);
//   console.log(newArray);
//
// //find the max value !important remmeber
//   let empty = newArray[0];
//   for(let i=1; i< newArray.length; i++){
//     if(newArray[i].length > empty.length){
//       empty = newArray[i]
//     }
//   };
//   console.log(empty);
// };
// longestWord('My name here Minho Saran99&%%!!! heheh');
