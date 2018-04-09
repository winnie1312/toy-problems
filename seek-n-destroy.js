///provide with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
///Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  console.log(arguments, arguments.length);
  
  for (let i = 1; i < arguments.length; i++) { /// i start @ 1 to avoid the 1st argument = arr
    while (arr.indexOf(arguments[i]) !== -1) { /// using while instead of if
      arr.splice(arr.indexOf(arguments[i]),1);
    };
  }
  return arr;
};
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));