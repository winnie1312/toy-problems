
function repeatStringNumTimes(str, num) {
  let result = "";
  if (Number.isInteger(num) && num > 0){
    for (let i =0; i < num; i++) {
      result += str;
    }
    return result;
  } else {
    return "";
  }
}  
console.log(repeatStringNumTimes("abc", 3));
