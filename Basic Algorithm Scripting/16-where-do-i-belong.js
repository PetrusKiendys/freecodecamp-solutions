// URL: https://www.freecodecamp.com/challenges/where-do-i-belong

function getIndexToIns(arr, num) {
  arr.push(num);            // insert the number into the array
  arr.sort(function(a,b) {  // sort the array (ascending order)
    return a - b;
  });
  
  return arr.indexOf(num);  // get the index (or placement) of the inserted number
}

getIndexToIns([3, 10, 5], 3);
