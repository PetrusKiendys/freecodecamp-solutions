// URL: https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  var sum = 0;
  
  arr.reduce(function(prev, curr, index) {
    var min = Math.min(prev, curr);
    var max = Math.max(prev, curr);
    
    do {
      sum += min;
      min++;
    } while (min !== max+1);
  });
  
  return sum;
}

sumAll([1, 4]);
