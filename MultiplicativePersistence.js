// function MultiplicativePersistence, pass number as parameter
// return the multiplicative persistence = the number of times you have to 
// multipily the digits in the number till you receive the single digit

function MultiplicativePersistence (num) {
    let time = 0;
    function Recursive (){
        let arr = num.toString().split("");
        let arrNum = arr.map(a => parseInt(a));
        num = arrNum.reduce((a,b) => a*b);
        time += 1;
    }
    while(num >= 10){
        Recursive();
    };
    return time;
};
console.log(MultiplicativePersistence(35));