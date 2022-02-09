const { capitalize } = require("./exercise001");

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  // Question -> why MUST return on seperate line below?
  words.forEach((word,index) => {(index !== 0) ? words[index] = capitalize(word):word});
  return words.join("");
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
