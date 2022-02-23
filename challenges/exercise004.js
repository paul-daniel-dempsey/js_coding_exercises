function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.substring(0,char.length) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return findNamesBeginningWith(words, "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num % 1 === 0);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  // v1 - string conversion (slow, simple) 
  return nums.map(num =>  parseFloat(Math.sqrt(num).toFixed(2)));

  // v2 -  round calculation (fast, complex)
  // return nums.map(num =>  Math.round((Math.sqrt(num)) * Math.pow(10,2)) / Math.pow(10,2));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence => sentence.toLowerCase().indexOf(str.toLowerCase()) >= 0);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(triangle => triangle.reduce((a, b) => a >= b ? a : b) );
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
