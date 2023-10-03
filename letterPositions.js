const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log((`😀Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const sentenceLowerCase = sentence.toLowerCase();
  const results = {};

  // loop through each character of the sentence
  for (let i = 0; i < sentenceLowerCase.length; i++) {
    //check that the character is a letter with an if statment
    if ((/[a-z]/).test(sentenceLowerCase[i])) {
      // letter does not exist in result
      if (results[sentenceLowerCase[i]] === undefined) {
        results[sentenceLowerCase[i]] = [i];
      //letter exists in results
      } else {
        results[sentenceLowerCase[i]].push(i);
      }
    }
  }
  return results;
};

// Test code
assertArraysEqual(letterPositions("hello").e, [1]);