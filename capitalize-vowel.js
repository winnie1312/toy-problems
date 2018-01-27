let Func = (str) => {
  let newstr = str.split('');
  for (let i = 0; i < newstr.length; i++) {
    const vowels =['a', 'o', 'i', 'u', 'e'].indexOf(newstr[i]) > -1;
    if(vowels) {
      newstr[i] = newstr[i].toUpperCase();
    }
  }
  console.log(newstr.join(''));
};
Func('abcde');
