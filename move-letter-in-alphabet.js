let word = (str) => {
  let newstr = '';
  let cap = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'z') {
      cap = 'a';
      } else {
      //move alphabet
      cap = String.fromCharCode(str.charCodeAt(i)+ 1);
    };
  //capitalize
    const vowels =['a','e','o','i','u'].indexOf(cap) > - 1;
    if (vowels) {
        cap = cap.toUpperCase();
      }
    newstr += cap;
  };
  
  console.log(newstr);
};
word('abcdzz');
