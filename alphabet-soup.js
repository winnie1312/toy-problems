//'coderbyte'--> 'bcdeeorty' in alphabet order
//number , punctuation aren't included in String -> regex

//c1
let AlphabetSoup =(str)=> {
  let arr =str.match(/[a-z]/gi);
  console.log(arr);
  //c1: let sorted = arr.sort((a,b) => a.charCodeAt() - b.charCodeAt());
  let sorted = arr.sort(); //c2 (shorter than the above one)// array.sort() default order to Unicode
  return sorted.join('');
}
console.log(AlphabetSoup('coderbyte1344$%&*)'));
