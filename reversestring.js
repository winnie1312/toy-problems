//c1: get the individual letter from str then put in the empty string "newstr"

let FirstReverse = (str) => {
  let newstr = '';
 for (let i = str.length - 1; i >= 0; i--) {
    newstr += str.charAt(i); //string.charAt() to get the index at the position in string 
// c2: newstr += str[i];

  }
  return newstr;
}
console.log(FirstReverse('12345'));

/*
let a = 'abc45';
console.log(a[3]);

/*
//c2: str--> array, put every element in new array --> change back to str
let str ='abcde';
let array = str.split('');
let after =[];
for(let i = array.length-1; i >=0; i--) {
  after.push(array[i]);
};
console.log(after.join(''));
*/
