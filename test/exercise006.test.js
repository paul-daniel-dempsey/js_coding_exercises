const {
sumMultiples,
isValidDNA,
getComplementaryDNA,
isItPrime,
createMatrix,
areWeCovered}= require("../challenges/exercise006");


describe("sumMultiples", () => {
    test("returns the sum of any numbers that are a multiple of 3 or 5", () => {         
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });
    test("returns zero, the sum of no 3 or 5 multiples", () => {         
        expect(sumMultiples([0, 0, 0])).toBe(0);
    });
    test("returns zero, the sum of empty array", () => {         
        expect(sumMultiples([])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns true when contain characters C, G, T or A", () => {         
        expect(isValidDNA("C G T A")).toBe(true);
        expect(isValidDNA("X Y Z A")).toBe(true);
        expect(isValidDNA("C S R D")).toBe(true);
    });

    test("returns false when missing C, G, T and A", () => {         
        expect(isValidDNA("B X Y D")).toBe(false);
    });
    test("returns false when empty array", () => {         
        expect(isValidDNA("")).toBe(false);
    });
});
