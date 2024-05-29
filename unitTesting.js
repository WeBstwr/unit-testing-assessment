function matPhyChem(marks) {
  if (typeof marks != "number" || marks < 1 || marks > 100) {
    return "Invalid choice";
  }
  if (marks >= 70 && marks <= 100) {
    return "A";
  } else if (marks >= 60 && marks <= 69) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "Pass";
  } else {
    return "Sup";
  }
}

function relEducation(marks) {
  if (typeof marks != "number" || marks < 1 || marks > 100) {
    return "Invalid choice";
  }
  if (marks >= 80 && marks <= 100) {
    return "A";
  } else if (marks >= 70 && marks <= 79) {
    return "B";
  } else if (marks >= 60 && marks <= 69) {
    return "C";
  } else if (marks >= 50 && marks <= 59) {
    return "Pass";
  } else {
    return "Sup";
  }
}

function engSwaComp(marks) {
  if (typeof marks != "number" || marks < 1 || marks > 100) {
    return "Invalid choice";
  }
  if (marks >= 75 && marks <= 100) {
    return "A";
  } else if (marks >= 65 && marks <= 74) {
    return "B";
  } else if (marks >= 55 && marks <= 64) {
    return "C";
  } else if (marks >= 45 && marks <= 54) {
    return "Pass";
  } else {
    return "Sup";
  }
}

const studentScore = {
  name: "Webster Ifedha",
  math: 78,
  eng: 65,
  kis: 48,
  phy: 67,
  che: 56,
  re: 89,
  comp: 82,
};

function calculateGradesAndAverage(studentScore) {
  const output = { name: studentScore.name };

  output.maths = matPhyChem(studentScore.math);
  output.re = relEducation(studentScore.re);
  output.eng = engSwaComp(studentScore.eng);
  output.kis = engSwaComp(studentScore.kis);
  output.phy = matPhyChem(studentScore.phy);
  output.che = matPhyChem(studentScore.che);
  output.comp = engSwaComp(studentScore.comp);

  const totalPoints =
    studentScore.math +
    studentScore.eng +
    studentScore.kis +
    studentScore.phy +
    studentScore.che +
    studentScore.re +
    studentScore.comp;
  const avgPts = Math.floor(totalPoints / 7);

  output.avgPts = avgPts;

  return output;
}

const output = calculateGradesAndAverage(studentScore);

console.log(output);
