//function SwapCase(str)
//swap the case of eachother ex: uppercase to lowercase and vice versa
//w1
function SwapCase(str){
    let arr = str.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i].match(/[a-z]/g)){
            arr[i] = arr[i].toUpperCase();     
        }else if( arr[i].match(/[A-Z]/g)){
            arr[i] = arr[i].toLowerCase();            
        }
    }
    return arr.join("");
};
console.log(SwapCase("He12llo123@@"));

//W2
// function SwapCase(str){
//     let arr = str.split("");
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i].toUpperCase()){
//             arr[i] = arr[i].toUpperCase();
//         }else{
//             arr[i] = arr[i].toLowerCase();
//         }
//     }
//     return arr.join("");
// };
// console.log(SwapCase("He12llo123@@"));