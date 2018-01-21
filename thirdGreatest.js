function ThirdGreatest(strArr){
    let thisWord;
    for (let i = 0; i < strArr.length; i++){
        strArr.sort((a,b)=>(b.length>a.length));
        thisWord = strArr[2];
    }
    console.log(thisWord)
};
console.log(ThirdGreatest(["helo" , "eminhe" , "and" , "saran", "hehes"]));


