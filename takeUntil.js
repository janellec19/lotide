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



const takeUntil = function(array, callback) {
  const end = array.findIndex(callback);
  return array.splice(0, end)
  
};

// //Test Code
const data1 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(eqArrays(takeUntil(data1, data => data < 4), [1, 2, 3]), true);
assertArraysEqual(eqArrays(takeUntil(data1, data => data < 3), [1, 2, 3, 4, 5, 6]), true)