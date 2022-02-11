const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner}= require("../challenges/exercise007");


    describe("sumDigits", () => {
        test("sum all digits upto and including value", () => {         
            expect(sumDigits(3)).toEqual(6);
        });
        test("sum all digits upto and including value", () => {         
            expect(sumDigits(4)).toEqual(10);
        });
        test("sum all digits upto and including value", () => {         
            expect(sumDigits(5)).toEqual(15);
        });
        test("sum zero to zero", () => {         
            expect(sumDigits(0)).toEqual(0);
        });
        test("sum negative downto and including value", () => {         
            expect(sumDigits(-3)).toEqual(-6);
        });                 
    });

    describe("createRange", () => {
        test("creates a start/end range of numbers in step", () => {         
            expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        });
        test("creates a start/end range  (step bigger than range) ", () => {         
            expect(createRange(2, 4, 3)).toEqual([2]);
        });
        test("creates a start/end range same (bigger than range)", () => {         
            expect(createRange(3, 3, 2)).toEqual([3]);
        }); 
        test("creates a start/end range of numbers (step default=1)", () => {         
            expect(createRange(3, 7, 1)).toEqual([3, 4, 5, 6, 7]);
        });
        test("creates a start/end range of numbers (step default=1)", () => {         
            expect(createRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
        });
        test("creates a start/end range same (step default=1)", () => {         
            expect(createRange(3, 3)).toEqual([3]);
        });        
    });

    describe("hexToRGB", () => {
        test("create RGB array from hex string", () => {         
            expect(hexToRGB("#FF0011")).toEqual([255,0,17]);
        });
        test("create RGB array from hex string", () => {         
            expect(hexToRGB("#FFFFFF")).toEqual([255,255,255]);
        });
        test("create RGB array from hex string", () => {         
            expect(hexToRGB("#000000")).toEqual([0,0,0]);
        });
        test("create empty RGB array", () => {         
            expect(hexToRGB("")).toEqual([]);
        });      
    });

