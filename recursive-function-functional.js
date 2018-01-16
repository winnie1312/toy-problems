// recursive function: call the function itself

// functional : giai thua cua n!
let functional = (n) => {
  return (n=== 0? 1 : functional(n-1)*n);
};
const a=4;
console.log(`functional of ${a} is ${functional(a)}`);
