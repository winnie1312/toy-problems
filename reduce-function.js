let arr =[1,2,3,4];
let reducer = (accumulator, currentValue) => accumulator += currentValue
let x = arr.reduce(reducer,3); //3 is initial value
console.log(x);
