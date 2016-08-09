// URL: https://www.freecodecamp.com/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  var res1 = arr1.filter(function(elem) {				// for each element in arr1
    return (arr2.indexOf(elem) !== -1) ? false : true;	// only return the elements that are not present in arr2
  });
  
  var res2 = arr2.filter(function(elem) {				// for each element in arr2
    return (arr1.indexOf(elem) !== -1) ? false : true;	// only return the elements that are not present in arr1
  });
  
  var res = res1.concat(res2);							// combine the two resulting arrays together
  
  return res;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
