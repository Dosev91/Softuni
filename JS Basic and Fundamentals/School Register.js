function schoolRegister(input) {

    let grades = {};

    for (const students of input) {
        let workArr = students.split(", ");
        let nameStudent = workArr[0].split(": ")[1];
        let numGrade = +workArr[1].split(": ")[1] + 1;
        let averageScore = +workArr[2].split(": ")[1];

        if (averageScore > 2.99) {
            if (grades.hasOwnProperty(numGrade)) {
                grades[numGrade].push([nameStudent, averageScore]);
            } else {
                grades[numGrade] = [];
                grades[numGrade].push([nameStudent, averageScore]);
            }
        }
    }
    let sortGrades = [];
    for (const key of Object.keys(grades)) {
        sortGrades.push(+key)
    }
    let newSort = sortGrades.sort((a, b) => a - b);
    let sum = 0;
    let nameOfStudents = [];
    let numberOfStudents = 0;

    for (const key of newSort) {
        for (const el of grades[key]) {
            nameOfStudents.push(el[0]);
            sum += el[1];
            numberOfStudents++;
        }
        console.log(`${key} Grade\nList of students: ${nameOfStudents.join(", ")}\nAverage annual score from last year: ${(sum / numberOfStudents).toFixed(2)}`);
        console.log();

        sum = 0;
        nameOfStudents = [];
        numberOfStudents = 0;
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ])