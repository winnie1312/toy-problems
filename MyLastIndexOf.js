const MyLastIndexOf = (arr, ele, fromIndex)=> {
  if (fromIndex === undefined) {
    fromIndex = arr.length-1
  }
  for (let i = fromIndex; i>=0; i--) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
};
console.log(MyLastIndexOf([5,2,5,4,5], 5, 3));
//2

