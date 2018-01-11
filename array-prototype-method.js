Array.prototype.biggest = function() {
  let order = this.sort((a,b)=> b-a);
  return order[0];

}
var arr = [1, 2, 3, 4, 5];
var avg = arr.biggest();
console.log(avg);
