// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: 		Computation of Grades using Function
	Programmer: 	Maria Elizabeth D.V. Genabe
	Section: 		BSCS22
	Start Date: 	June 2, 2023
	End Date: 		June 2, 2023
*/
const students = [
  {
    name: "Elizabeth Genabe",
    enablingAssessments: [98, 99, 96, 95, 100],
    summativeAssessments: [92, 80, 96],
    finalExamGrade: 82,
  },
];

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

console.log("Name\t\tClass Participation\tSummative Grade\tFinal Grade\tLetter Grade");
console.log("---------------------------------------------------------------------");
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const classParticipation = calculateAverage(student.enablingAssessments);
  const summativeAverage = calculateAverage(student.summativeAssessments);
  const finalGrade = (classParticipation * 0.3) + (summativeAverage * 0.3) + (student.finalExamGrade * 0.4);
  const letterGrade = determineLetterGrade(finalGrade);

  console.log(`${student.name}\t${classParticipation.toFixed(2)}\t\t${summativeAverage.toFixed(2)}\t\t${finalGrade.toFixed(2)}\t\t${letterGrade}`);
}
