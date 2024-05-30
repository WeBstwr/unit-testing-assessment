const {
  matPhyChem,
  relEducation,
  engSwaComp,
  calculateGradesAndAverage,
} = require("./unitTesting");

describe("matPhyChem", () => {
  test("returns the grade of the marks", () => {
    expect(matPhyChem(78)).toBe("A");
  });
  test("returns the grade of the marks", () => {
    expect(matPhyChem(45)).toBe("Pass");
  });
  test("returns the grade of the marks", () => {
    expect(matPhyChem(29)).toBe("Sup");
  });
});

describe("relEducation", () => {
  test("returns the grade of the marks", () => {
    expect(relEducation(78)).toBe("B");
  });
  test("returns the grade of the marks", () => {
    expect(relEducation(51)).toBe("Pass");
  });
  test("returns the grade of the marks", () => {
    expect(relEducation(29)).toBe("Sup");
  });
});

describe("engSwaComp", () => {
  test("returns the grade of the marks", () => {
    expect(engSwaComp(64)).toBe("C");
  });
  test("returns the grade of the marks", () => {
    expect(engSwaComp(51)).toBe("Pass");
  });
  test("returns the grade of the marks", () => {
    expect(engSwaComp(29)).toBe("Sup");
  });
});

describe("calculateGradesAndAverage", () => {
  test("returns the grade and average points", () => {
    expect(
      calculateGradesAndAverage({
        name: "Webster Ifedha",
        math: 78,
        eng: 65,
        kis: 69,
        phy: 67,
        che: 56,
        re: 89,
        comp: 82,
      }),
    ).toEqual({
      name: "Webster Ifedha",
      maths: "A",
      re: "A",
      eng: "B",
      kis: "B",
      phy: "B",
      che: "C",
      comp: "A",
      avgPts: 72,
    });
  });
});
