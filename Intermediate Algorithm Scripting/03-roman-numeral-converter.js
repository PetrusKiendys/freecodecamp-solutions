// URL: https://www.freecodecamp.com/challenges/roman-numeral-converter

function numToArray(num) {
  var res = [];
  num = num.toString();
  
  for (var i = 0; i < num.length; i++) {
    res.push(+num.charAt(i));
  }
  
  return res;
}

function convertDigitToRoman(digit, pos) {
  var commonSymbol, midSymbol, nextSymbol;
  var positions = {
    0: function() {commonSymbol = "I"; midSymbol = "V"; nextSymbol = "X";},
    1: function() {commonSymbol = "X"; midSymbol = "L"; nextSymbol = "C";},
    2: function() {commonSymbol = "C"; midSymbol = "D"; nextSymbol = "M";},
    3: function() {commonSymbol = "M"; midSymbol = "V¯"; nextSymbol = "X¯";}
  };
  if (!positions[pos])
    throw new Error("Unable to convert number with " + parseInt(pos+1) + " positions");
  else
    positions[pos]();  // assign symbols in lookup table to variables
  
  // build roman numeral digit
  if (digit === 9)
    return commonSymbol+nextSymbol;
  else if (digit >= 5)
    return midSymbol+commonSymbol.repeat(digit-5);
  else if (digit === 4)
    return commonSymbol+midSymbol;
  else if (digit >= 1)
    return commonSymbol.repeat(digit);
  else if (digit === 0)
    return "";
  
  return digit;    // returns arabic (normal) numeral if the conversion isn't successful
  //throw new Error("Unsupported digit format");  // can also just throw an error instead
}

function convertToRoman(num) {
  var arr = numToArray(num);
  var res = arr.map(function(val, index) {
    return convertDigitToRoman(val, (arr.length-index-1));
  });
  res = res.join('');
  
  return res;
}

// example usage
convertToRoman(8500);
