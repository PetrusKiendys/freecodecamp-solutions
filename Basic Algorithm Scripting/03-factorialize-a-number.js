// URL: https://www.freecodecamp.com/challenges/factorialize-a-number

function factorialize(num) {
  if (num === 1 || num === 0)        // factorial of 1 or 0 is 1
    return 1;
  return num * factorialize(num-1);  // recursively call factorialize
}

factorialize(5);
