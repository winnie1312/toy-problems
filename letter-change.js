// 1. convert i-> i+1 (charCodeAt--> fromCharCode)

let LetterChanges =(str) => {
  let converted = str.replace(/[a-z]/gi, x => ((x==='z' || x==='Z') ? 'a' : String.fromCharCode(x.charCodeAt() + 1)));
  let cap = converted.replace(/[a|o|u|e|i]/gi, y => y.toUpperCase());
  return cap;
};
console.log(LetterChanges('HaVde fun45!'));
