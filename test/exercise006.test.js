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
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("cgta")).toBe(true);
        expect(isValidDNA("XYZA")).toBe(true);
        expect(isValidDNA("CSRD")).toBe(true);
    });

    test("returns false when missing C, G, T and A", () => {         
        expect(isValidDNA("BXYD")).toBe(false);
    });
    test("returns false when empty string", () => {         
        expect(isValidDNA("")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test.only("return a string of the complementary base pairs C->G, G->C, T->A or A->T", () => {         
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("SACTG")).toBe("STGAC");
        expect(getComplementaryDNA("SACTGd")).toBe("STGACD");
    });

    test.only("returns empty string when missing C, G, T and A", () => {         
        expect(getComplementaryDNA("BXYD")).toBe("BXYD");
    });
    test.only("returns empty string when empty string", () => {         
        expect(getComplementaryDNA("")).toBe("");
    });
});