//+[a-z]+ --> print true
let func = (str) => {
  let letter = [];
  for (let i =0; i < str.length; i++) {
    if(str[i].match(/[a-z]/i) !== null) {
      if(str[i-1] !== '+' || str[i+1] !== '+') {
        console.log('false', str[i]);
        return ;
      } else {
        letter.push(str[i]);
      }
    }
  }
  console.log('true', letter);
}
func('=4+s+3+a=5');


// find num: 0<=num <= 9 && a.num.b
let func2 = (str2) => {
  for(let j = 0; j < str2.length; j++) {
    if(str2[j].match(/[0-9]/)) {
      if(str2[j-1] === 'a' && str2[j+1] === 'b') {
        console.log(`the num we found is: ${str2[j]}`);
      }
    }
  }
};

func2('1a2b1a1b3dta9b');
