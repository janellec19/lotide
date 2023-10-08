const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(obj, callback) {
  for (let key in obj) {        //scan the object using object.keys method
    const target = obj[key];   //create a target variable of what you're looking for in the array
    const comparisonResult = callback(target);  //create a variable to compare the output of the callback function to the search
    if (comparisonResult) {   //if the target is found
      return key;             // return the key
    }
  }
};

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(stars, x => x.stars === 2), "noma"); // => "noma"
assertEqual(findKey(stars, x => x.stars === 1), "Blue Hill"); // => "Blue Hill"