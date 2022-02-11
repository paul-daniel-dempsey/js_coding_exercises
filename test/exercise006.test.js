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
    test("return a string of the complementary base pairs C->G, G->C, T->A or A->T", () => {         
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("SACTG")).toBe("STGAC");
        expect(getComplementaryDNA("SACTGd")).toBe("STGACD");
    });

    test("returns empty string when missing C, G, T and A", () => {         
        expect(getComplementaryDNA("BXYD")).toBe("BXYD");
    });
    test("returns empty string when empty string", () => {         
        expect(getComplementaryDNA("")).toBe("");
    });
});

describe("isItPrime", () => {
    test("receive a number and return true if is a prime number (can only be divided evenly by 1 and itself)", () => {         
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(13)).toBe(true);
    });

    test("receive a number and return false if not a prime number (can only be divided evenly by 1 and itself) ", () => {         
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(4)).toBe(false);
    });
    test("returns false string when zero", () => {         
        expect(isItPrime(0)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("receive a number and return an array of n arrays, each filled with n items", () => {         
        expect(createMatrix(3,"Foo")).toEqual([["Foo","Foo","Foo"],["Foo","Foo","Foo"],["Foo","Foo","Foo"]]);
    });

    test("receive zero and return an empty array", () => {         
        expect(createMatrix(0,"foo")).toEqual([]);
    });
});



describe("areWeCovered", () => {
    test.only("return true when there > 3 staff for days", () => {         
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
                             { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
                             { name: "John", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
                             { name: "Ian", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] }],"Monday")).toBe(true);
        // expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "John", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Ian", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] }],"Tuesday")).toBe(true);
        // expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "John", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Ian", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] }],"Wednesday")).toBe(true);
        // expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "John", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Ian", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] }],"Thursday")).toBe(true);
        // expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "John", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Ian", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] }],"Friday")).toBe(true);
        // expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "John", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] },
        //                      { name: "Ian", rota: ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"] }],"Saturday")).toBe(true);
    });

    test.only("return false when there < 3 staff for days", () => {         
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                             { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                             { name: "John", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                             { name: "Ian", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }],"Friday")).toBe(false);
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                             { name: "Pedro", rota: ["Monday", "Saturday", "Sunday", "Tuesday", "Wednesday"] },
                             { name: "John", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                             { name: "Ian", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }],"Monday")).toBe(false);
        expect(areWeCovered([{ name: "Sally", rota: [] },
                             { name: "Pedro", rota: [] },
                             { name: "John", rota: [] },
                             { name: "Ian", rota: [] }],"Sunday")).toBe(false);
    });

    test.only("return false when rota empty", () => {         
        expect(areWeCovered([],"Monday")).toBe(false);
    });
});