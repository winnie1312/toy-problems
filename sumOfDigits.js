//Create the function sumOfDigits that adds individual digits of a number
// and returns the sum.

const sumOfDigits = (num)=> {
  let arr = num.toString().split("");
  let numberArr= arr.map(a => parseInt(a));
  let result = numberArr.reduce((a,b)=> a+b)
  return result;
};
console.log(sumOfDigits(457));