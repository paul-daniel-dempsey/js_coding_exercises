function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
// RegEX - replace(/RegEX/g, letter => letter.<operation>())
// RegEX => [^\w{1}:FirstCharOfFirstWord]
  return word.replace(/^\w{1}/g, letter => letter.toUpperCase());
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1).toUpperCase() + "." + lastName.substring(0,1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  // 10 ^ DecimalPlaces
  const dp = Math.pow(10,2);
  return Math.round((originalPrice * (1+(vatRate/100))) * dp) / dp;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  // Option1 : ReCalc
  //const dp = Math.pow(10,2);
  //return Math.round((originalPrice * (1-(reduction/100))) * dp) / dp; 

  // Option 2 : Reuse addVAT ( & its validation) 
  return addVAT(originalPrice,-reduction);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
