// URL: https://www.freecodecamp.com/challenges/chunky-monkey

function chunkArrayInGroups(arr, size) {
  var resArr = [];
  
  for (i = 0; i < arr.length; i=size+i) {  // incrementation by size of chunks
    resArr.push(arr.slice(i, i+size));     // array is sliced into size of chunks
  }
  
  return resArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 3);
