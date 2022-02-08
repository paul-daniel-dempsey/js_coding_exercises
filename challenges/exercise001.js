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

  // FIRST ATTEMPT
  // let start = 0;
  // let stop = 0;
  // if ((str.length % 2) === 0) {
  //   // even
  //   start = Math.floor((str.length)/2) - 1
  //   stop = start + 2
  // }
  // else {
  //   // odd
  //   start = Math.floor((str.length)/2)
  //   stop = start + 1    
  // }

  // SECOND CLEANUP
  let start = Math.floor((str.length)/2) + (((str.length % 2) === 0)?-1:0);
  let stop = start + (((str.length % 2) === 0)?2:1);
  return str.substring(start,stop);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse("").join("");
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
