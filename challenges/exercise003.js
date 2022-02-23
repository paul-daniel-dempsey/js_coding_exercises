function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word,index) => (index === 0) ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => n * n);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.filter(person => person.subjects.length > 0).reduce((counter, obj) => counter += obj.subjects.length,0);
}

function checkIngredients(menu, ingredientFind) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredientFind) throw new Error("ingredient is required");
  return menu.filter(dish => dish.ingredients.indexOf(ingredientFind) >= 0).length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arr1Unique = arr1.filter((v, i, a) => a.indexOf(v) === i);
  let arr2Unique = arr2.filter((v, i, a) => a.indexOf(v) === i);
  return arr1Unique.filter(num => arr2Unique.includes(num)).sort((a,b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
