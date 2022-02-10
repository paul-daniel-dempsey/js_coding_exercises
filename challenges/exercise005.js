const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required"); // ? How do I add 'THROW NEW' to implicit return?
  if (n === undefined) throw new Error("n is required"); // ? How do I add 'THROW NEW' to implicit return?

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
const findNextNumber_implicitreturn = (nums, n) => (((nums.findIndex(element => element === n) === -1) || (nums.findIndex(element => element === n) === nums.length-1)) ? null : nums[nums.findIndex(element => element === n)+1] );

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required"); // ? How do I add 'THROW NEW' to implicit return?

  // v1 - Grouping Object
  // let binarynums = str.split("");
  // let group = {"0" : 0}; // !HARD CODE DEFAULT! //
  // for(let i=0;i < binarynums.length; i++) { 
  //   group[binarynums[i]] = group[binarynums[i]] ? group[binarynums[i]] + 1 : 1; }
  // return group;

  // v2 - Reduce (with hc default)
  return str.split("").reduce((binarynums, num) => { binarynums[num] = binarynums[num] ? binarynums[num] + 1 : 1; return binarynums;}, {"0" : 0});   
};
const count1sand0s_implicitreturn = str => str.split("").reduce((binarynums, num) => { binarynums[num] = binarynums[num] ? binarynums[num] + 1 : 1; return binarynums;}, {"0" : 0});

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required"); // ? How do I add 'THROW NEW' to implicit return?
  return parseInt(n.toString().split("").reverse().join(""));
};
const reverseNumber_implicitreturn = n => parseInt(n.toString().split("").reverse().join(""));

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required"); // ? How do I add 'THROW NEW' to implicit return?
  return arrs.reduce((lhs, rhs_item) => lhs + rhs_item.reduce((lhs, rhs_item) => lhs + rhs_item, 0), 0);
};
const sumArrays_implicitreturn = arrs => arrs.reduce((lhs, rhs_item) => lhs + rhs_item.reduce((lhs, rhs_item) => lhs + rhs_item, 0), 0);

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required"); // ? How do I add 'THROW NEW' to implicit return?

  // v1
  // let last = arr.pop();
  // let first = arr.shift();
  // arr.unshift(last);
  // arr.push(first);
  // return arr;

  // v2 - Create array with end items swapped, everything same in middle
  if (arr.length > 0) { [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]; }
  return arr;

  // v3 - LastItem + ConcatSlice + Concat FirstItem NOT WORKING FOR ARR[] ?? COME BACK TO ??
  // return (arr.length > 0) ? [arr[arr.length-1]].concat(arr.slice(1, arr.length-1)).concat([arr[0]]): arr;
};
const arrShift_implicitreturn = arr => (arr.length > 0) ? [arr[arr.length-1]].concat(arr.slice(1, arr.length-1)).concat([arr[0]]): arr;


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required"); // ? How do I add 'THROW NEW' to implicit return?
  if (searchTerm === undefined) throw new Error("searchTerm is required"); // ? How do I add 'THROW NEW' to implicit return?
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required"); // ? How do I add 'THROW NEW' to implicit return?
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
