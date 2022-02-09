function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  const cityfind = "Manchester";
  return (person.city === cityfind);
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const buscapacity = 40;
  return Math.ceil( people / buscapacity );
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  // SetUp Empty
  let toFind = "sheep"
  let group = [];
  group[toFind] = 0;

  // Count instances of all
  for(let i=0;i<arr.length;i++) {
    group[arr[i]] = group[arr[i]] ? group[arr[i]] + 1 : 1; 
  }
  return group[toFind];
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
