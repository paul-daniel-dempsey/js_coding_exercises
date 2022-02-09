function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  // FOR
  // let smallnums = [];
  // for (let i=0;i < nums.length;i++) {
  //     if (nums[i] < 1) {
  //       smallnums.push(nums[i]);
  //     }
  // }
  // return smallnums;

  // FOR EACH
  // let smallnums = [];
  // nums.forEach((num) => (num < 1) ? smallnums.push(num) : 0 );
  // return smallnums;

  // FILTER
  return nums.filter(num => num < 1);

  // MAP : CANNOT REMOVE FROM MAP : NOT POSSIBLE
 // return nums.map(num => num < 1 ? num : undefined );
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  // FOR
  // let beginnames = [];
  // for (let i=0;i < names.length;i++) {
  //     if (names[i].substring(0,char.length) === char) {
  //       beginnames.push(names[i]);
  //     }
  // }
  // return beginnames;

  // FOR EACH
  // let beginnames = [];
  // names.forEach((name) => (name.substring(0,char.length) === char) ? beginnames.push(name) : 0 );
  // return beginnames;

  // FILTER
  return names.filter(name => name.substring(0,char.length) === char);

  // MAP : CANNOT REMOVE FROM MAP : NOT POSSIBLE
  //return names.map(name => name.substring(0,char.length) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return findNamesBeginningWith(words, "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
