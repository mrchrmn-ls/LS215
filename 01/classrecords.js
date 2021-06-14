let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const WEIGHTS = {
  exams: 0.65,
  exercises: 0.35
};

const LETTER_GRADES = "ABCDEF";
const PERCENT_LIMITS = [93, 85, 77, 69, 60, 0];


function average(numArray) {
  return numArray.reduce((acc, num) => acc + (num / numArray.length), 0);
}

function total(numArray) {
  return numArray.reduce((acc, num) => acc + num);
}

function minimum(array) {
  return array.reduce((acc, num) => {
    if (acc < num) return acc;
    return num;
  });
}

function maximum(array) {
  return array.reduce((acc, num) => {
    if (acc > num) return acc;
    return num;
  });
}

function weightedGrade(exams, exercises) {
  return Math.round((WEIGHTS.exams * average(exams)) +
         (WEIGHTS.exercises * total(exercises)));
}

function letterFromGrade(grade) {
  let letterIndex = PERCENT_LIMITS.filter(num => grade < num).length;
  return LETTER_GRADES[letterIndex];
}

function getCombinedGrade(student) {
  let grade = weightedGrade(student.scores.exams, student.scores.exercises);
  let letter = letterFromGrade(grade);
  return `${grade} (${letter})`;
}

function transpose(matrix) {
  return matrix[0].map((_column, columnIndex) => {
    return matrix.map(row => row[columnIndex]);
  });
}

function extractExams(scores) {
  let studentExamMatrix = [];

  for (let student in scores) {
    studentExamMatrix.push(scores[student].scores.exams);
  }

  return transpose(studentExamMatrix);
}


function generateClassRecordSummary(scores) {
  let summary = {
    studentGrades: [],
    exams: []
  };

  for (let student in scores) {
    summary.studentGrades.push(getCombinedGrade(scores[student]));
  }

  summary.exams = extractExams(scores).map(exam => {
    return {
      average: average(exam).toFixed(1),
      minimum: minimum(exam),
      maximum: maximum(exam)
    };
  });

  return summary;
}

console.log(generateClassRecordSummary(studentScores));