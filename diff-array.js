//return array of any items only found in 1 of 2 given arrays but not both.
function diffArray(arr1, arr2) {
  let concatedArr = arr1.concat(arr2);
  let result = concatedArr.filter(a => ((arr1.indexOf(a) === -1) || (arr2.indexOf(a) == -1)));
  return result; 
};
console.log(diffArray([1, 2, 3, 6, 5], [1, 2, 3, 4, 5]));