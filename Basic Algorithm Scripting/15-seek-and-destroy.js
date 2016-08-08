// URL: https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);  // fetch an arbitrary amount of args (passed after the initial array)
  var res = arr.filter(function(elem) {
    return args.indexOf(elem) === -1;  	// keep elements that are not of same value as args
  });
  
  return res;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
