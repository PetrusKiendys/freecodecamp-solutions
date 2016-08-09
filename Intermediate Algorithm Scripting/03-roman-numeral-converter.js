// URL: https://www.freecodecamp.com/challenges/roman-numeral-converter

function numToArray(num) {
  var res = [];
  num = num.toString();			// convert number to a string
  
  for (var i = 0; i < num.length; i++) {
    res.push(+num.charAt(i));	// coerce character to a number
  }
  
  return res;
}

function convertDigitToRoman(digit, pos) {
  var commonSymbol, midSymbol, nextSymbol;	// declare relative symbols
  var positions = {							// fill lookup table with absolute symbols
    0: function() {commonSymbol = "I"; midSymbol = "V"; nextSymbol = "X";},
    1: function() {commonSymbol = "X"; midSymbol = "L"; nextSymbol = "C";},
    2: function() {commonSymbol = "C"; midSymbol = "D"; nextSymbol = "M";},
    3: function() {commonSymbol = "M"; midSymbol = "V¯"; nextSymbol = "X¯";}
  };
  if (!positions[pos])
    throw new Error("Unable to convert number with " + parseInt(pos+1) + " positions");	// throw error if a digit with a position out of bounds (in respect to the lookup table) is passed
  else
    positions[pos]();						// assign a selection of absolute symbols to the relative symbols based on the passed positional value 'pos'
  
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
  
  return digit;										// returns the unconverted arabic numeral if the conversion isn't successful
  //throw new Error("Unsupported digit format");	// alternatively we can also just throw an error instead
}

function convertToRoman(num) {
  var arr = numToArray(num);								// split every digit of a number into an array
  var res = arr.map(function(val, index) {					// map arabic numeral to its roman numeral counterpart
    return convertDigitToRoman(val, (arr.length-index-1));	// convert digit to roman numeral where the lower indexed digits hold the higher position
    														// eg. in the number '4000', the digit '4' is assigned to index 0 but holds the highest position 3 (counted from the right)
  });
  res = res.join('');										// join the array of roman numerals into a string
  
  return res;
}

convertToRoman(8500);
