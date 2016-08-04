// URL: https://www.freecodecamp.com/challenges/confirm-the-ending

function confirmEnding(str, target) {
  var strEnding = str.substr(str.length-target.length)  // match length of string ending and target
  if (strEnding === target)  // verify whether string and target are in fact the same
    return true;
  else
    return false;
}

confirmEnding("Bastian", "ian");
