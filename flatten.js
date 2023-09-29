const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log((`😀Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arr) {

  let flatArray = (arr.flat()); //flattens the array to the depth of 1
  return flatArray; // and it will print the flattened array

};


const result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);