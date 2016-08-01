// URL: https://www.freecodecamp.com/challenges/check-for-palindromes

function clean(str) {
  var res = str.toLowerCase().replace(/\W|_/g, '');  // convert to lower case and remove non-alphanumeric characters
  return res;
}

function reverseString(str) {
  return str.split("").reverse().join("");  // reverse string
}

function palindrome(str) {
  var res = clean(str);          // cleaned string
  var res2 = reverseString(res); // cleaned and reversed string
  if (res === res2)              // compare strings to identify palindrome
    return true;
  else
    return false;
}

palindrome("fooBAR101?!_");
