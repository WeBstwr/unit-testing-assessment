const matPhyChem = require("./unitTesting");

describe("matPhyChem", () => {
    test("returns the grade of the marks", () => {
        expect(matPhyChem(98)).toBe("A")
    })
    test("returns the grade of the marks", () => {
        expect(matPhyChem(45)).toBe("Pass")
    })
    test("returns the grade of the marks", () => {
        expect(matPhyChem(29)).toBe("Sup")
    })  
})
