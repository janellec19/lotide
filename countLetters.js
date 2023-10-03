const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  
  const allLetters = {}; //empty object

  const strLowerCase = str.toLowerCase(); //converts str to all lowercase

  for (let letters of strLowerCase) { //loops through the string
    if ((/[a-z]/).test(letters)) {
      if (allLetters[letters] === undefined) { //searches for all letters
        allLetters[letters] = 1;                //if letter is there, add 1
      } else {
        allLetters[letters] ++;                //if letter is there multiple times, add 1 each time
      }
    }
  }
  return allLetters;
};

//Test
let str = (" BRB");
const result1 = countLetters(str, {b: 2, r: 1,});
assertEqual(result1["b"], 2);
assertEqual(result1["r"], 1);
assertEqual(result1[" "], undefined);