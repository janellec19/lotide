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

const middle = function(array) {
  if (array.length <= 2)
    return []; 

  if (array.length % 2 === 1) { 
  const position = (array.length - 1) / 2; //first position
  const element =  array[position]; //odd array
  
   return [element];
  }
  
  const element1 = array[(array.length /2) - 1]; 
  const element2 = array[array.length / 2];
  return [element1, element2];
};
assertArraysEqual(middle([0, 1]), []);// empty []
assertArraysEqual(middle([0, 1, 2]), [1]); // [1]
assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]); // [1, 2]
assertArraysEqual(middle([0, 1, 2, 3, 4]), [2]); // [2]