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

  // MAP : CANNOT REMOVE FROM MAP?
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

  // MAP : CANNOT REMOVE FROM MAP?
  //return names.map(name => name.substring(0,char.length) === char ? name : undefined);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return findNamesBeginningWith(words, "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  // FOR
  // let numints = [];
  // for (let i=0;i < nums.length;i++) {
  //     if (nums[i] % 1 === 0) {
  //       numints.push(nums[i]);
  //     }
  // }
  // return numints;

  // FOR EACH
  // let numints = [];
  // nums.forEach((num) => (num % 1 === 0) ? numints.push(num) : 0 );
  // return numints;

  // FILTER
  return nums.filter(num => num % 1 === 0);

  // MAP : CANNOT REMOVE FROM MAP?
  //return nums.map(num => num % 1 === 0 ? num : undefined);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
 
  // FOR
  // let displays = [];
  // for (let i=0;i < users.length;i++) {
  //   displays.push(users[i].data.city.displayName);
  // }
  // return displays;

  // FOR EACH
  // let displays = [];
  // users.forEach((user) => displays.push(user.data.city.displayName));
  // return displays;

  // MAP
  return users.map(user => { return user.data.city.displayName});

  // FILTER : CANNOT CREATE ARRAY OF SUBITEMS?
  //return users.filter(user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
 
  // FOR
  // let sqrroots = [];
  // for (let i=0;i < nums.length;i++) {
  //   sqrroots.push(Math.round((Math.sqrt(nums[i])) * Math.pow(10,2)) / Math.pow(10,2));
  // }
  // return sqrroots;

  // FOR EACH
  // let sqrroots = [];
  // nums.forEach((num) => sqrroots.push(Math.round((Math.sqrt(num)) * Math.pow(10,2)) / Math.pow(10,2)));
  // return sqrroots;

  // MAP
  return nums.map(num => { return Math.round((Math.sqrt(num)) * Math.pow(10,2)) / Math.pow(10,2)});

  // FILTER : CANNOT CREATE ARRAY OF MODIFIED ITEMS?
  //return nums.filter(num => Math.round((Math.sqrt(num)) * Math.pow(10,2)) / Math.pow(10,2));
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
