const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else if (array1[i] !== array2[i]);
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
  console.log((`😀Assertion Passed: ${actual} === ${expected}`))
} else {
console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
const newArray  = source.filter((items) => !itemsToRemove.includes(items));
//filters array content based on search criteria (itemsToRemove) based on 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntax

return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([5, 6, 7, 8], [6, 7]), ([5, 8]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);