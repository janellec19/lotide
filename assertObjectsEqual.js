const eqObjects = function(object1, object2) {
  // convert objects to arrays
  Object.keys(object1);
  Object.keys(object2);
  
  for (let i in object1) {
    if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log((`😀😀😀Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log(`🚩🚩🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Test Code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true);