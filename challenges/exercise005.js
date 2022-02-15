const findNextNumber = (nums, n) => (((nums.findIndex(element => element === n) === -1) || (nums.findIndex(element => element === n) === nums.length-1)) ? null : nums[nums.findIndex(element => element === n)+1] );

const count1sand0s = str => str.split("").reduce((binarynums, num) => { binarynums[num] = binarynums[num] ? binarynums[num] + 1 : 1; return binarynums;}, {"0" : 0});

const reverseNumber = n => parseInt(n.toString().split("").reverse().join(""));

const sumArrays = arrs => arrs.reduce((lhs, rhs_item) => lhs + rhs_item.reduce((lhs, rhs_item) => lhs + rhs_item, 0), 0);

const arrShift = arr => (arr.length > 1) ? [arr[arr.length-1]].concat(arr.slice(1, arr.length-1)).concat([arr[0]]): arr;

const findNeedle = (haystack, searchTerm) => Object.values(haystack).filter(item => item.toString().toLowerCase().includes(searchTerm.toLowerCase())).length > 0;

const getWordFrequencies = str => str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(" ").reduce((wordfeq, word) => { wordfeq[word] = wordfeq[word] ? wordfeq[word] + 1 : 1; return wordfeq;}, {});

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
