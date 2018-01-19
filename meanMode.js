//function passes array of numbers
// mean=== mode -> return 1, otherwise return 0

//1. find the mean
//2. find the mode  & compare

function MeanMode(arr){
   Array.prototype.sum = function(){ //1
        return this.reduce((a,b)=> a+b);
    }
    let mean = arr.sum()/arr.length; 

    let table = {}; //2
    let highest = 0;
    let mode = 0;
    for(let i = 0; i < arr.length; i ++){
        let thisnum = arr[i];
        table[thisnum] === undefined ? table[thisnum] = 1 : table[thisnum] += 1; 
        if (highest < table[thisnum]){
            highest = table[thisnum];
            mode = thisnum;
        } 
    }
    return mode === mean ? 1 : 0;
};
console.log(MeanMode([4,4,4,6,2]));


