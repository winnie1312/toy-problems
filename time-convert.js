// modulo operator examples
let timeConvert = (num) => {
  return `now is ${Math.floor(num/60)}:${num%60} minutes`;
};
console.log(timeConvert(70));
