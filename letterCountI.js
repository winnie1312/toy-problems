function letterCount(str){
    let arr =str.split(" ")
    console.log("array is: ",arr);
    
    let table ={};

    for(let i=0; i<arr.length; i++){
        let thisWord = arr[i];
        table[thisWord]={};

        table[thisWord]['highest']=0;

        for(let c=0; c<thisWord.length; c++){
            let thisCharacter = thisWord[c];
            //check if the char exist yet? not-> set count =1, the next times count +=1            
            table[thisWord][thisCharacter] === undefined?
            table[thisWord][thisCharacter]=1:
            table[thisWord][thisCharacter]+=1;
            
            if(table[thisWord][thisCharacter] > table[thisWord]['highest']){
                table[thisWord]['highest'] = table[thisWord][thisCharacter];
            }
        }
    }
    console.log("table is: ",table);
    let answer ={
        word : null,
        count: 1
    }
    for (let w in table){
        if(table[w]["highest"] > answer["count"]){
            answer["count"] = table[w]["highest"];
            answer["word"] = w;
        }
    }    
    return answer["count"]===1? -1: answer["word"];
};

console.log(letterCount("hello apple pie"));