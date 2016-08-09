// URL: https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  var sum = 0;	// initialize sum
  
  arr.reduce(function(prev, curr) {
    var min = Math.min(prev, curr);	// assign the lowest number to variable 'min'
    var max = Math.max(prev, curr);	// assign the highest number to variable 'max'
    
    do {
      sum += min;			// add the value of 'min' to 'sum'
      min++;				// increment 'min' by 1
    } while (min <= max);	// exit the while loop when 'min' > 'max'
  });
  
  return sum;
}

sumAll([1, 4]);
