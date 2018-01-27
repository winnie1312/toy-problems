function AdditivePersistence(num){
    let time = 0;
    function recursive(){
        let arr = num.toString().split("");
        let numArr = arr.map(a => parseInt(a));
        let sum = numArr.reduce((a,b) => (a+b));
        num = sum;
        time += 1;
    }
    while(num > 10){
        recursive();
    }
    return time;
};
console.log(AdditivePersistence(99926753279899));