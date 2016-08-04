// URL: https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
  var array = str.toLowerCase().split(' ');  // flatten and split the incoming string
  var resArray = [];
  
  array.forEach(function(elem) {
    var upper = elem[0].toUpperCase();  // Convert first character of word to upper case
    resArray.push(upper+elem.slice(1)); // Push upper case letter and rest of the word to array
  });
  
  res = resArray.join(" ");
  return res;
}

titleCase("I'm a little tea pot");
