// function NumberSearch(str) take the str parameter
//search for all the numbers in the string, 
//add them together, then return that final number 
//ex: Input:"75Number9" --> Output:84

// //W1
// function NumberSearch(str){
//     let arr = str.split("");
//     let multiDigit = 0;
//     for(let i=0; i<arr.length; i++){
//         if((arr[i].match(/[0-9]/g)) && (arr[i+1].match(/[0-9]/g))){
//             multiDigit = arr[i]+arr[i+1];
//             arr.splice(multiDigit);
//         }
//     }
//     let singleDigit = arr.join("").match(/[0-9]/g);
//     singleDigit.splice(2, 0,multiDigit);
//     console.log(singleDigit)
//     let result = singleDigit.reduce((a,b)=> parseInt(a)+parseInt(b));
//     return result;
// };
// console.log(NumberSearch("10 2one Number*1*"));

//W2
function NumberSearch(str){
    let digit = str.match(/[\d]+/g); // /[\d]/ = /[0-9]/  ; /[\d]+/ to count the multidigit
    let result = digit.reduce((a,b)=> parseInt(a)+ parseInt(b));
    return result;
};
console.log(NumberSearch("10 2one Number*1*"));