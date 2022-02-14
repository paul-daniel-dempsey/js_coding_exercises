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
  return arr.filter(animals => animals === 'sheep').length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  // v2 - First Letter M, Second Letter Numeric, City Manchester
  return ((person.address.postCode.substring(0,1).toUpperCase() === "M") && (/^\d+$/.test(person.address.postCode.substring(1,2))) && (person.address.city === "Manchester"));
}


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
