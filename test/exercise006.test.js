const {
sumMultiples,
isValidDNA,
getComplementaryDNA,
isItPrime,
createMatrix,
areWeCovered}= require("../challenges/exercise006");


describe("sumMultiples", () => {
    test.only("it returns the sum of any numbers that are a multiple of 3 or 5", () => {         
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });
    test.only("it returns zero, the sum of no 3 or 5 multiples", () => {         
        expect(sumMultiples([0, 0, 0])).toBe(0);
    });
    test.only("it returns zero, the sum of empty array", () => {         
        expect(sumMultiples([])).toBe(0);
    });
});
