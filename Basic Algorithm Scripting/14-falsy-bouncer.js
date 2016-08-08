// URL: https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {
  arr = arr.filter(function(val) {
    return Boolean(val);                // preferred solution
    //return !val == !!Boolean(false);  // alternative solution
  });
  return arr;
}

bouncer([7, "ate", null, NaN, undefined, "", false, 9, "pie", 0]);
