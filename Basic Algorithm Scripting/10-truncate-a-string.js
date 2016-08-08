// URL: https://www.freecodecamp.com/challenges/truncate-a-string

function truncateString(str, num) {
  var res = "";
  
  if (num > 3 && str.length > num)        // truncate string replacing the three last characters with dots
    res = str.slice(0, num-3) + "...";
  else if (num <= 3 && str.length > num)  // truncate string appending dots to the end of truncation
    res = str.slice(0, num) + "...";
  else									  // if num >= str.length, return str untruncated
    res = str;
  
  return res;
}

truncateString("A-tisket a-tasket A green and yellow basket",
               "A-tisket a-tasket A green and yellow basket".length/2);
