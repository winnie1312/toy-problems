// //W1
// function PowerOfTwo(num){
//     return Number.isInteger(Math.log2(num)) === true ? "true" : "false";
// };
// console.log(PowerOfTwo(4));

//W2
function PowerOfTwo(num){
    if (num === 1){
        return true;
    } else return (num % 2 === 0) ? PowerOfTwo(num/2) : false ;
};
console.log(PowerOfTwo(5));
