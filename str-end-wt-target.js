
/// does str end with target? (not to use endsWith())
function confirmEnding(str, target) {
  let targetLen = target.length;
  return (str.substr(-targetLen) === target); 
}
console.log(confirmEnding("He has to give me a new name", "name"));
