let num =-2134
let result = Number.isInteger(num);
console.log(result);


//c2: function

function isInteger(num) {
  return num % 1 === 0;
}
console.log(isInteger(3.124))
