// 0 : even;
// 1: odd;
// N: eveness is the same as N-2

let isEven = function(number){
    number = Math.abs(number);
    return ((number===0) ? "true" : (number===1)? "false": isEven(number-2));
  }
console.log(isEven(-39));
