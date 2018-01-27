//question: having function divisionStringified(num1, num2)
//divide num1 by num2 and return the result as a string with properly formatted commas
//if an answer is only 3 digits long, return the number with no commas.


//c1
function DivisionStringified(num1, num2){
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
console.log(DivisionStringified(532222,2));

//c2
// function DivisionStringified(num1, num2){
//     let finalNum = num1/ num2;
//     let result = Math.round(finalNum);
//     return result.toLocaleString();
// };
// console.log(DivisionStringified(50333,2));


