///Remove all falsy values from an array.
///Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  let falsyArr = [false, null, 0, "", NaN, undefined ];
  let newArr = arr.filter(a => ((falsyArr.indexOf(a) === -1) && !Number.isNaN(a))); /// Number.isNaN("abc") = false;
  return newArr;
}
console.log(bouncer([1, null, NaN, 2, undefined]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([7, "ate", "", false, 9]));