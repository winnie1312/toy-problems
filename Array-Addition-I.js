

function ArrayAdditionI(arr) {
  let max = arr.reduce((a,b)=> Math.max(a,b));
  arr.splice(arr.indexOf(max),1);
  console.log(arr);

// c1: produce all possibilities of power set --> BigO(n^2)
  let subSets = [[]];
  for(let i = 0; i < arr.length; i++){
    let len = subSets.length;
    for(let j = 0;j <len; j++){
      let temp = subSets[j].concat(arr[i]);// array.concat(array or values)
      subSets.push(temp);
      let sum = temp.reduce((a,b)=> a+b);
      if(max === sum) {return 'true'};
    }
  }
};


//c2: dynamic programming

// for  (let i=0; i<arr.length; i++){
//   for(let j=0; j< max+1; j++){
//     let m[i][0]=1;
//     if(j< arr[i]){
//       m[i][j] = m[i-1][j];
//     } else {
//       m[i][j]=m[i-1][j-arr[i]];
//     }
//   }
//   return m[arr.length-1][max];
// }

console.log(ArrayAdditionI([-1,3,4,6]));

