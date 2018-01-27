let CheckVowel = (str) => {
  let str1 = str.toLowerCase()
  let arr =str1.split('');
  console.log(`arr is ${arr}`);
  console.log(str);
  let vowels =['a', 'o', 'e', 'i', 'u'];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if(vowels.indexOf(arr[i]) !== -1) {
      count ++;
    }
  }
  console.log(count);
}

CheckVowel('Sarng Uri');
