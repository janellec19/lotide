const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
};
const findKeyByValue = function(obj, str) {
  for (let key in obj) {        //scan the object using object.keys method
    if (obj[key] === str) {
      return key;                   //return the first key which contains the given value
    }
  }
  return undefined;                 //if no key with given value is found, return undefined

};



//Test Code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);