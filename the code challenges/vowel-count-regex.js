// //c1
// let vowelCount = (str)=> {
//   let strNew =str.toLowerCase()
//   let arr =strNew.split("");
//   console.log(arr); 
//   let vowel = ['a', 'o', 'i', 'e', 'u'];
//   let count = 0;
//   for(let i=0; i<arr.length; i++) {
//     if(vowel.indexOf(arr[i]) !== -1) {
//       count +=1;
//     }
//   }
//   return count;
// };
// console.log(vowelCount('cOdErbyte abeuo eu'));


//c2 (best way)
function VowelCount(str){
  let arr = str.match(/[aeoiu]/gi);// regex: match only vowels + case insensitive
  if(arr === null) {
    return `VowerCount is 0`;
  }else {
    return `VowerCount is ${arr.length}` ;
  }
};
console.log(VowelCount('myaeOI'))
