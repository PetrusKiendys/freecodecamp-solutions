// URL: https://www.freecodecamp.com/challenges/slasher-flick

function slasher(arr, n) {
  var res = arr.splice(n, arr.length);
  return res;
}

slasher([1, 2, "strawberries", "bread", "potatoes", "cheese", 42], 3);
