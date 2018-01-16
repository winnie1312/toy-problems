// //c1
// let count=0;
// let countBs =function(str){
//   for(let i=0; i<str.length; i++){
//     if(str[i]==="B"){
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countBs("BBCSDB"));

//c2 using regex

let countBs2 = function(str2){
  let result = str2.match(/['b']/gi).length;
  console.log(result);
}
countBs2("absdgdfgbbbbbbcsff")
