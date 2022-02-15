function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word,index) => (index === 0) ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num = (num * num));
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.filter(person => person.subjects.length > 0).reduce((counter, obj) => counter += obj.subjects.length,0);
}

function checkIngredients(menu, ingredientfind) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredientfind) throw new Error("ingredient is required");
  return menu.filter(dish => dish.ingredients.indexOf(ingredientfind) >= 0).length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arr1unique = arr1.filter((v, i, a) => a.indexOf(v) === i);
  let arr2unique = arr2.filter((v, i, a) => a.indexOf(v) === i);
  return arr1unique.filter(num => arr2unique.includes(num)).sort((a,b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
