// st wrong with the code
function ArrayAdditionI(arr) {
  let sum = arr.reduce((a,b)=> Math.max(a,b));
  arr.splice(arr.indexOf(sum),1);
  console.log(arr);

for  (let i=0; i<arr.length; i++){
  for(let j=0; j< sum+1; j++){
    let [i][j] = 1 || 0;
    [i][0]=1 ;
    if(j< arr[i]){
      [i][j] = m[i-1][j];
    } else {
      [i][j]=[i-1][j-arr[i]];
    }
  }
  return  [arr.length-1][sum];
}
console.log(ArrayAdditionI([-1,3,4,6]));
