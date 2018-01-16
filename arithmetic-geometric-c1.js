let ArithGeo =(array) => {
//Geometic
if(array.length <=2){
  return -1;
}
let isGeometic = function(array){
  // copy the original array to newarray (arr)
  //without modified the original array.
  //in isGeometic() & isArithmetic(), the arr is modified
  //which can changed the original one. lead to bugs.
  let arr= array.slice();
  let r = arr[1]/ arr[0] ;  //r: common ratio;
  for (let i = 1; i < arr.length; ++i) {
   if ((arr[0]*=r) !== arr[i]){return false;};
};
  return true;
};
//arithmetic
let isArithmetic = function(array){
  let arr=array.slice();
  let d = arr[1] - arr[0]; // d: common difference;
  for(let j = 1; j < arr.length; ++j){
    if((arr[0] += d) !== arr[j]){
      return false;
    };
  };
  return true;
};
//check
if(isGeometic(array)) return 'Geometric';
else if(isArithmetic(array)) return 'Arithmetic';
else  return -1;
};
console.log(ArithGeo([2,6]));
