const {
 //   sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner}= require("../challenges/exercise007");


    describe("createRange", () => {
        test.only("creates a start/end range of numbers in step", () => {         
            expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        });
        test.only("creates a start/end range  (step bigger than range) ", () => {         
            expect(createRange(2, 4, 3)).toEqual([2]);
        });
        test.only("creates a start/end range same (bigger than range)", () => {         
            expect(createRange(3, 3, 2)).toEqual([3]);
        }); 
        test.only("creates a start/end range of numbers (step default=1)", () => {         
            expect(createRange(3, 7, 1)).toEqual([3, 4, 5, 6, 7]);
        });
        test.only("creates a start/end range of numbers (step default=1)", () => {         
            expect(createRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
        });
        test.only("creates a start/end range same (step default=1)", () => {         
            expect(createRange(3, 3)).toEqual([3]);
        });        
    });
