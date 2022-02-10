const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  // v1, Clunky!
  // let found = null;
  // for(let i=0;i<nums.length-1;i++) {
  //   if (nums[i] === n) {
  //     found = i + 1;
  //     break;
  //   }
  // }
  // return ((found === null) ? null : nums[found]);

  // v2 IndexOf
  // let pos = nums.indexOf(n);
  // return (((pos === -1) || (pos === nums.length-1)) ? null : nums[pos+1] );

  // v3 FindIndex + ARROW Function
  let index = nums.findIndex(element => element === n);
  return (((index === -1) || (index === nums.length-1)) ? null : nums[index+1] ); 
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
