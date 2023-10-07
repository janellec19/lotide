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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// Test Code
assertArraysEqual(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]), true);
assertArraysEqual(eqArrays(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]), true);
assertArraysEqual(eqArrays(map(words, word => word[2]), [ 'o', 'n', undefined, 'j', 'm' ]), true);
