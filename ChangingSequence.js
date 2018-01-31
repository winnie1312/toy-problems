//function ChangingSequence passes array as parameter
//return index of min or max of the numbers in array
//if there is no min or max, return -1
//c1
function ChangingSequence (arr) {
  for (let i=0; i <arr.length; i++) {
    let isIncrease = arr[1] - arr[0];
    if (isIncrease > 0) {
      if (arr[i+1] < arr[i]) { 
        return i;
      }
    } else if (isIncrease < 0) {
      if (arr[i+1] > arr[i]) {
        return i;
      } 
    } 
  }
  return -1;
};
console.log(ChangingSequence([1,3,4,5,6,4,3,2,1]));

//c2
// function ChangingSequence (arr) {
// 		let funIncrease = 0;
// 		let funDecrease = 0;
//     for (let i=0; i<arr.length; i++) {
// 			if (arr[i+1] > arr[i]) {
// 				funIncrease +=1;
// 			} else if (arr[i+1] < arr[i]) {
// 				funDecrease +=1;
// 			}
// 		}
// 		if((funIncrease === arr.length -1) || (funDecrease === arr.length -1)) {
// 			return -1
// 		} else {
// 			let max = arr.reduce((a,b) => Math.max(a,b));
// 			let min = arr.reduce((a,b) => Math.min(a,b));
// 			let maxIndex = arr.indexOf(max);
// 			let minIndex = arr.indexOf(min);
// 			if ((arr[maxIndex -1] < max) && (arr[maxIndex +1] < max)) {
// 				return maxIndex ;
// 			} else if ((arr[minIndex -1] > min) && (arr[minIndex +1] > min)) {
// 				return minIndex ;
// 			}
// 		}
// };
// console.log(ChangingSequence([1,3,5,7,4,3,2]));

