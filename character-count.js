
// count the letter repeat in the str

let str= ' Hello my name is Bu';
let obj = {};
for (let i = 0; i < str.length; i++) {
  let currentLetter = str.charAt(i).toLowerCase();
  if(obj[currentLetter]=== undefined){
    obj[currentLetter] =1;
  } else {
    obj[currentLetter] +=1;
  }
}
console.log(obj);
