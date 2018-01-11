//range function
let arr=[];
let reverse;
function range(x,y,z){
  if(x>y){
    let temp=x;
    x=y;
    y=temp;
    reverse = true;
  }
  let sum=x;
  for (let i=x; i<=y; i++){
    sum += Math.abs(z);
    if(sum<y){
      arr.push(sum);
    }
  }
  if(reverse===true){
    return arr.reverse();
  }else {
    return arr;
  }
};
console.log(range(10,1,-2))
