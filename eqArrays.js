const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
};
    const eqArrays = function(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] === array2[i]) {
      return true;
    } else if (array1[i] !== array2[i]);
      return false;
    }
    };
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => passed
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => passed
  assertEqual(eqArrays(["4", "2", "3"], ["4", "2", "3"]), true); // => passed
  assertEqual(eqArrays([15, 2, 30], [1, 2, 3]), false);//passed
  