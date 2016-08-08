// URL: https://www.freecodecamp.com/challenges/mutations

function mutation(arr) {
  var str1 = arr[0].toLowerCase();  // normalize to make case-insensitive
  var str2 = arr[1].toLowerCase();  // normalize to make case-insensitive
  
  var res = "";
  
  for (i = 0; i < str2.length; i++) {  // iterate through str2
    var _eval = str1.indexOf(str2[i]); // check if a str2 character is present in str1
    if (_eval === -1)	// return false if a str2 character is not present in str1
      return false;
  }
  
  return true;			// otherwise return true
}

mutation(["hello", "hey"]);
