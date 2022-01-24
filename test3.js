var minGlass = function (N, K) {
  let glass = 0;

  while (K > 0) {
    if (K - N > 0) {
      K = K - N;
      N--;
      if(N === 0) return -1;
      glass++;

    } else {
      glass++;
      break;
    }
  }
  return glass;
};
console.log(minGlass(4, 8));
console.log(minGlass(4, 10));
console.log(minGlass(3, 100));
console.log(minGlass(10, 5));

