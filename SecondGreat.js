//return the second greatest low and high in the array, 
// ex: [1,4,5,7,8,4]-> 4 7

//c1
//(1) delete the duplicated elements to get unique array
//(2) sort the array ascending order
//(3) return result
function SecondGreatLow(arr){
  //(1)
  let uniqueArr =arr.filter(function(element, index, arraySelf){return arraySelf.indexOf(element)===index});
  console.log(uniqueArr);

  //(2)
  let newArr = uniqueArr.sort(function(a,b) { return a-b});
    

  if(newArr.length ===2){
    return newArr[0] + " " + newArr[1];
  }else {
    return newArr[1]+ " " + newArr[newArr.length-2];
  }
};
console.log(SecondGreatLow([1,3,9, 8,5,7,4,3]));

  
//  //c2
//  function SecondGreatLow(arr) { 

//     // code goes here  
//     var sorted = arr.sort(function(a,b){return a-b;});
//     var greatest = sorted[sorted.length - 1];
//     var lowest = sorted[0];
//     var secondGreatest, secondLowest;
    
//     for (var i = 0; i < sorted.length; i++) {
//       if (sorted[i] !== lowest) {
//         secondLowest = sorted[i];
//         break;
//       }
//     }
    
//     for (var i = sorted.length - 1; i >= 0; i--) {
//       if (sorted[i] !== greatest) {
//         secondGreatest = sorted[i];
//         break;
//       }
//     }
    
//     return secondLowest + " " + secondGreatest;       
//   }
     