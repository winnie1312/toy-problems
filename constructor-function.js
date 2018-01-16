//vd1
function Person (name) {
    this.ten = name;
    this.say = function () {
        return ("Xin chào, tên tôi là " + this.ten);
    }
};
var peter = new Person("Peter");
console.log(peter.say());


//vd2

function check(x,y,z){
  this.first =x;
  this.second =y;
  this.third =z;
  this.average = function(){
    return (this.first +this.second +this.third)/3;
  }
}

let num = new check(1,2,4);
console.log(num.average());
