//c1
function divisionStringified(num1, num2){
    let finalNum = num1/ num2;
    let whole = Math.round(finalNum).toString();
    
    let result = whole;
    if(whole.length > 3){
        let arr = whole.split("");
        for(let i= whole.length-3; i>0; i-=3){
            arr.splice(i,0,",");
        }
        result = arr.join("");
    }
    return result;
};
console.log(divisionStringified(532222,2));

//c2
// function divisionStringified(num1, num2){
//     let finalNum = num1/ num2;
//     let result = Math.round(finalNum);
//     return result.toLocaleString();
// };
// console.log(divisionStringified(50333,2));


