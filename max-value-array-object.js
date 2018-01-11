
//find the key with the max number value in object
let obj = {'a': 5, 'b': 2, 'c': 4};

let x = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
console.log(x);



// Find the max number in array
let array =[1,2,5,6,7,8,4,3,6,4,3,];
console.log(array.reduce(function(a,b) {return Math.max(a,b)}));
