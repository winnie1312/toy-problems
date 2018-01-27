let AbCheck =(str)=> {
  //c1 : match(/.../)--> return array
  return str.match(/[a](...)[b]|[b](...)[a]/gi) !== null;

  //c2
  //return str.match(/[a].{3}[b]|[b].{3}[a]/gi) !== null;// !== null cho ra boolean value

  //c3: (/.../).test(str)--> return boolean
  //return (/(a...b|b...a)/gi).test(str);
};
console.log(AbCheck('my naBxyaabu'));


// let AbCheck =(str) => {
//   let strLow =str.toLowerCase();
//   for(let i=0; i<strLow.length; i++){
//     if(strLow[i] === 'a' && strLow[i+4] ==='b'){
//       return true;
//     }
//     if( strLow[i] ==='b' && strLow[i+4]=== 'a'){
//       return true;
//     }
//   };
//   return false;
// };
// console.log(AbCheck('Laurasobcdsa'));
