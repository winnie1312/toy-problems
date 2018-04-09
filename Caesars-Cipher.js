
function rot13(str) { // LBH QVQ VG! 
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    /// convert english characters to ASCII
    let x = str.charCodeAt(i);
    if (x < 65 || x > 90) { /// [65-90] = [A-Z] ==> out of the range still remains such as punctuation, space...
      arr[i] = String.fromCharCode(x);
    } else if ( x < 78) { /// 90 -13 =77
      arr[i] = String.fromCharCode(x +13);
    } else {   /// 78 + 13 > 90 
      arr[i] = String.fromCharCode(x -13);
    }
  }
  return arr.join("");
  }
console.log(rot13("LBH QVQ VG!"));
