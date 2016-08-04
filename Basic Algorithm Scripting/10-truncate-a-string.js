// URL: https://www.freecodecamp.com/challenges/truncate-a-string

// TODO: comment and explain implementation
function truncateString(str, num) {
  var res = "";
  
  if (num > 3 && str.length > num)
    res = str.slice(0, num-3) + "...";
  else if (num <= 3 && str.length > num)
    res = str.slice(0, num) + "...";
  else
    res = str;
  
  return res;
}

truncateString("A-tisket a-tasket A green and yellow basket",
               "A-tisket a-tasket A green and yellow basket".length/2);
