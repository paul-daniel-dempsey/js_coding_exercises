/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => arr.filter(num => num % 3 === 0 || num % 5 === 0).reduce((lhs, rhs_item) => lhs + rhs_item, 0);
const sumMultiples_working = arr => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(num => num % 3 === 0 || num % 5 === 0).reduce((lhs, rhs_item) => lhs + rhs_item, 0);
};


/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => (['C','G','T','A'].filter(char => str.toString().toUpperCase().split("").includes(char)).length > 0) ? true : false;
const isValidDNA_working = str => {
  if (str === undefined) throw new Error("str is required");
  
  // v1
  // let dna = ['C','G','T','A'];
  // let arystr = str.toString().toUpperCase().split("");
  // return (dna.filter(char => arystr.includes(char)).length > 0) ? true : false;

  // v2
  // return (['C','G','T','A'].filter(char => str.toString().toUpperCase().split("").includes(char)).length > 0) ? true : false;
};


/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

    // v1  C->G, G->C, T->A or A->T
  let dnaMap = {'C':'G','G':'C' ,'T':'A','A':'T'};
  return str.toString().toUpperCase().split("").map(char => { if (Object.keys(dnaMap).includes(char)) { return dnaMap[char] } else { return char;} }).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  // v1, only loop to square of number to reduce loops, 0 & 1 are NOT prime numnbers
  for(let i = 2; i <= Math.sqrt(n); i++) {
      if(n % i === 0) return false; }
  return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
