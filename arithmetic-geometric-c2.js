let ArithGeo =(arr) => {

//Geometic
let isGeometic = function(arr){
let r = arr[1]/ arr[0] ;  //r: common ratio; a: initial value
for (let i = 1; i < arr.length; ++i) {
   if ((arr[i]/ arr[i-1]) !== r){
     return false;
   };
};
return true;
};

//arithmetic
let isArithmetic = function(arr){
  console.log('how many??');
  let d = arr[1] - arr[0]; // a: common difference;
  for(let j = 1; j < arr.length; ++j){
    if((arr[j]- arr[j-1]) !== d){
      return false;
    };
  };
  return true;
};
// console.log(isArithmetic([2,4,6,8,10]));
//check

if(isGeometic(arr)) return 'Geometic';
else if(isArithmetic(arr)) return 'Arithmetic';
else  return -1;
};
console.log(ArithGeo([2,6,18,54]));
