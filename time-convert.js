// modulo operator examples
let TimeConvert = (num) => {
  return `now is ${Math.floor(num/60)}:${num%60} minutes`;
};
console.log(TimeConvert(70));
