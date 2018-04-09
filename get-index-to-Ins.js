///Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
/// once it has been sorted. 
///The returned value should be a number.
function getIndexToIns(arr, num) {
  arr.sort((a,b) => a > b);
  console.log(arr); 
  if (arr.indexOf(num) !== -1) {
    return arr.indexOf(num);
  } else {
    for (let i = 0; i < arr.length; i ++) {
      if (num < arr[0]) {
        return 0;
      } else if (num > arr[arr.length -1]) {
        return arr.length;
      } else if ((num > arr[i]) && (num < arr[i+1])) {
        return i+1;
      }
    }
  }
}
console.log(getIndexToIns([10, 50, 25, 40, 30], 27));
