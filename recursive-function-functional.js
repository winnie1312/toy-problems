// recursive function: call the function itself

// functional : giai thua cua n!
let Functional = (n) => {
  return (n=== 0? 1 : Functional(n-1)*n);
};
const a=4;
console.log(`functional of ${a} is ${Functional(a)}`);
