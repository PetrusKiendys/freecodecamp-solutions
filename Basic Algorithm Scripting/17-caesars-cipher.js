// URL: https://www.freecodecamp.com/challenges/caesars-cipher

function decode(char) {
  var charCode = char.charCodeAt(0);  // get the character code of the provided character
  var charCodeShifted = charCode-13;  // shift the character code back to its decoded value
  
  // loop the character code back to 90 from 65 if the shifted code fell under 65
  if (charCodeShifted < 65) {
    var diff = 65-charCodeShifted;
    charCodeShifted = 91-diff;
  }
  
  var res = String.fromCharCode(charCodeShifted);	// get the decoded character from the shifted character code
  return res;
}

function isAlphabetic(char) {
  var charCode = char.charCodeAt(0);                        // get the character code of the provided character
  return (charCode >= 65 && charCode <= 90) ? true : false; // if the character code is within the range of 65-90 (inclusive) then it is an alphabetic character
}

function rot13(str) {
  var res = "";
  
  for (var i = 0; i < str.length; i++) {  // iterate through the whole encoded string
    if (isAlphabetic(str[i]))  // check if a given character is alphabetic
      res += decode(str[i]);   // decode alphabetic character
    else
      res += str[i];           // pass on non-alphabetic character
  }
  
  return res;                  // return decoded string
}

rot13("UBCRSHYYL ZL FBYHGVBAF JRER HFRSHY :)");
