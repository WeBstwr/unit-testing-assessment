const { matPhyChem, relEducation, engSwaComp }= require("./unitTesting");

describe("matPhyChem", () => {
    test("returns the grade of the marks", () => {
        expect(matPhyChem(78)).toBe("A")
    })
    test("returns the grade of the marks", () => {
        expect(matPhyChem(45)).toBe("Pass")
    })
    test("returns the grade of the marks", () => {
        expect(matPhyChem(29)).toBe("Sup")
    })  
})

describe("relEducation", () => {
    test("returns the grade of the marks", () => {
        expect(relEducation(78)).toBe("B")
    })
    test("returns the grade of the marks", () => {
        expect(relEducation(51)).toBe("Pass")
    })
    test("returns the grade of the marks", () => {
        expect(relEducation(29)).toBe("Sup")
    })  
})

describe("engSwaComp", () => {
    test("returns the grade of the marks", () => {
        expect(engSwaComp(64)).toBe("C")
    })
    test("returns the grade of the marks", () => {
        expect(engSwaComp(51)).toBe("Pass")
    })
    test("returns the grade of the marks", () => {
        expect(engSwaComp(29)).toBe("Sup")
    })  
})