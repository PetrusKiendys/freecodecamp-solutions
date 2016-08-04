// URL: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  var res = "";
  for (i = 0; i < num; i++) {
    res += str;
  }
  return res;
}

repeatStringNumTimes("abc", 3);
