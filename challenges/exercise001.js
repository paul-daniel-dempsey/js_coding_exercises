function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
  // v1 - RegEX => [^\w{1}:FirstCharOfFirstWord]
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

  // v1 - string conversion (slow/neat, no Math) 
  return Number((originalPrice * (1+(vatRate/100))).toFixed(2));

  // v2 - Power calculation (fast, use Math)
  // return Math.round((originalPrice * (1+(vatRate/100))) * Math.pow(10,2)) / Math.pow(10,2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return addVAT(originalPrice,-reduction);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  // v1 - Odd length, starts -1, stops +2 : Even length, starts 0, stops +1
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
  return words.map((word,index) => words[index] = reverseWord(word));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(user => user.type === 'Linux').length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const dp = Math.pow(10,2);
  const sum = scores.reduce((a,b) => a + b, 0);
  return Math.round((sum / scores.length) * dp) / dp;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let reply = "";
  if ((n % 3) === 0) {
    reply += "fizz";  
  }
  if ((n % 5) === 0) {
    reply += "buzz";  
  }  
  return (reply === "" ? n : reply);
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
