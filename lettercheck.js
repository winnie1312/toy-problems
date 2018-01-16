function letterCount(str){
    let arr = str.split(" ");
    console.log(arr);

    let table ={};
    for(let i=0; i<arr.length; i++){
        let thisWord =arr[i];
        table[thisWord] ={};

        table[thisWord]["biggest"] =0;

        for(let c=0; c<thisWord.length; c++){
            let char = thisWord[c];
            table[thisWord][char]===undefined?
            table[thisWord][char] =1:
            table[thisWord][char] +=1;

            if(table[thisWord][char]>table[thisWord]["biggest"]){
                table[thisWord]["biggest"] = table[thisWord][char]
            }
        }
    }
    let answer = {
        word : null,
        count : 1
    }
    for (let w in table){
        if(table[w]["biggest"] >answer["count"]){
            answer["count"]= table[w]["biggest"];
            answer["word"]= w
        }
    }
    return answer["count"] ===1? -1 : answer["word"]

    console.log("table is: ", table);
}
console.log(letterCount("helo apple pie"));