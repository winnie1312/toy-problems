//function, pass strArr as parameter
// strArr is ["I",..,"E",.."I",.. ] with I is integers from 0-n,return the correct subset bases on following rule
// E means take out the smallest integer currently in the whole set.
//finally return the new set with integers separated by commas

function OffLineMinimum (strArr) {
    let numberArr = [];
    let resultArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (parseInt(strArr[i])){
            numberArr.push(parseInt(strArr[i]));
        } else {
            numberArr.sort((a,b) => a>b);
            resultArr.push(numberArr[0]);
            numberArr.splice(0,1);
        }
    }
    return resultArr.map(Number).join();
};
console.log(OffLineMinimum(["4","E","1","2","3","E","10","E","7","E"]))