var findSumOfBiggestOddAndEven = function(array) {
  let biggestOdd = 0;
  let biggestEven = 0;
  for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
          if(array[i] > biggestEven) biggestEven = array[i];
      }
      if(array[i] % 2 !== 0) {
          if(array[i] > biggestOdd) biggestOdd = array[i];
      }
  }
  if(biggestEven == 0 || biggestOdd == 0) return 0;
  else return biggestOdd + biggestEven
}

array=[1,3,5];
console.log(findSumOfBiggestOddAndEven(array));