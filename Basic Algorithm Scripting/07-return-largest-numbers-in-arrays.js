// URL: https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfArr(arr) {
  largestElem = 0;
  
  arr.forEach(function(elem) {
    if (elem > largestElem) {  // assign largest value of sub-array to "largestElem" variable
      largestElem = elem;
    }
  });
  
  return largestElem;
}

function largestOfFour(arr) {
  resArr = [];
  
  arr.forEach(function(elem, index) {
    resArr[index] = largestOfArr(arr[index]);  // assign largest value of each sub-array to resArr
  });
  
  return resArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
