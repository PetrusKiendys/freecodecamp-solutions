// URL: https://www.freecodecamp.com/challenges/wherefore-art-thou
// Adapted solution: https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Where-art-thou

function whatIsInAName(collection, source) {
  var resArr = [];
  var sourceKeys = Object.keys(source);      // store all 'source' keys in an array
  
  resArr = collection.filter(function(obj) { // for each object in 'collection', only retain...
    return sourceKeys.every(function(key) {  // ...those objects that for each 'source' key...
      return obj.hasOwnProperty(key) && obj[key] === source[key];  // ...have the same key-value pair
    });
  });
  
  return resArr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet", a: "1" }], { last: "Capulet", a: "1"});
