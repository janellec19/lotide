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

  assertArraysEqual([1,2], [1,2]); 
  assertArraysEqual([2,2], [1,2]); 
  assertArraysEqual([], [1, 2]);