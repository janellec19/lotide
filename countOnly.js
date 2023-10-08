const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(20, 1);

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { //creates a key to allitems
    console.log(item);           // prints the keys of the object
    if (itemsToCount[item]) {    // counts specific key
      if (results[item]) {        //if the key is found in results
        results[item] ++;         //count it
      } else {
        results[item] = 1;        //if a key isn't found, it's not added
      }
    }
  }
  return results;
};


//Test Code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
