//' my name is bu'  --> 'My Name Is bu'

//c1
let check ="toi ten la bu";
let array = check.split(' ');
for(let i = 0; i < array.length; i++) {
  array[i] = array[i].substr(0,1).toUpperCase() + array[i].substr(1);
}
check = array.join(' ');
console.log(check);


/*
//c2: call the function

let func = (str) => {
  let a = str.split(' ');

  for (let i=0; i< a.length; i++) {
    a[i] = a[i].substr(0,1).toUpperCase() + a[i].substr(1);
  }

  str = a.join(' ');
  return str;
}
console.log(func('my name is bu'));
*/
