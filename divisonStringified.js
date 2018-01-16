function divisionStringified(num1, num2){
    let result = num1/ num2;
    let check = num1 % num2;
    return check === 0? result.toString() : Math.ceil(result).toString();
};
console.log(divisionStringified(175,24));