let arr=[1,2,3,6,8,9,9,3,4];
//let max = Math.max(...arr);// Math.max only applies for number. not array

let max = arr.reduce((a,b) => Math.max(a,b));
console.log(max);
