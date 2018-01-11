//'bcdz' --> 'cdea'

//charCodeAt(): letter --> number in unicode
//fromCharCode(): number in unicode --> letter

let word = (str) => {
  let newstr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'z') {
      newstr += 'a';
      } else {
      newstr += String.fromCharCode(str.charCodeAt(i)+ 1);
    };
  };
  console.log(`word before capitalizing vowels: ${newstr}`);
};
word('bcdz');

  
