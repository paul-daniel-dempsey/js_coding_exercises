const { capitalize } = require("./exercise001");

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  // Question -> why MUST return forEach on seperate line below?
  words.forEach((word,index) => { words[index] = (index !== 0) ? capitalize(word): word });
  return words.join("");
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  // Question -> why MUST return forEach on seperate line below?
  nums.forEach((num,index) => nums[index] = (num * num));
  return nums;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  // Question -> why CANT 'let/var total' inside forEach?
  // Question -> why MUST return forEach on seperate line below?
  let total = 0;
  people.forEach((person) => total += person.subjects.length);
  return total;
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
