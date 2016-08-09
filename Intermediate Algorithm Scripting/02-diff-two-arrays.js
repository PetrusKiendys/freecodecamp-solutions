// URL: https://www.freecodecamp.com/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  var res1 = arr1.filter(function(val, i, thisArr) {
    return (arr2.indexOf(val) !== -1) ? false : true;
  });
  
  var res2 = arr2.filter(function(val, i, thisArr) {
    return (arr1.indexOf(val) !== -1) ? false : true;
  });
  
  var res = res1.concat(res2);
  
  return res;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
