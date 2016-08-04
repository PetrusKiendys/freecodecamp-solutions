// URL: https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";
  
  words.forEach(function(val) {
    if (val.length > longestWord.length)
      longestWord = val;
  });
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
