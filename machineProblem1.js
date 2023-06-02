const readlineSync = require('readline-sync');

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function determineLetterGrade(finalGrade) {
  if (finalGrade >= 90 && finalGrade <= 100) {
    return "A";
  } else if (finalGrade >= 80 && finalGrade < 90) {
    return "B";
  } else if (finalGrade >= 70 && finalGrade < 80) {
    return "C";
  } else if (finalGrade >= 60 && finalGrade < 70) {
    return "D";
  } else {
    return "F";
  }
}

const students = [];

for (let i = 1; i <= 5; i++) {
  console.log(`Student ${i}:`);

  const name = readlineSync.question("Enter the name of the student: ");

  const enablingAssessments = [];
  for (let j = 1; j <= 5; j++) {
    const grade = parseFloat(readlineSync.question(`Enter enabling assessment ${j}: `));
    enablingAssessments.push(grade);
  }

  const summativeAssessments = [];
  for (let j = 1; j <= 3; j++) {
    const grade = parseFloat(readlineSync.question(`Enter summative assessment ${j}: `));
    summativeAssessments.push(grade);
  }

  const finalExamGrade = parseFloat(readlineSync.question("Enter major exam grade: "));

  const classParticipation = calculateAverage(enablingAssessments);
  const summativeGrade = calculateAverage(summativeAssessments);
  const finalGrade = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExamGrade * 0.4);
  const letterGrade = determineLetterGrade(finalGrade);

  students.push({
    name: name,
    classParticipation: classParticipation.toFixed(2),
    summativeGrade: summativeGrade.toFixed(2),
    finalGrade: finalGrade.toFixed(2),
    letterGrade: letterGrade
  });

  console.log("------------------------");
}

console.log("Name\t\tClass Participation\tSummative Grade\tFinal Grade\tLetter Grade");
console.log("---------------------------------------------------------------------");
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(`${student.name}\t${student.classParticipation}\t\t${student.summativeGrade}\t\t${student.finalGrade}\t\t${student.letterGrade}`);
}




