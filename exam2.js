function slove(input) {
    const student = Number(input[0]);
    let topStudents = 0;
    let between45 = 0;
    let between34 = 0;
    let fail = 0;
    let sumOfEvaluation = 0;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) >= 5) {
            topStudents++;
            sumOfEvaluation += Number(input[i]);
        } else if (Number(input[i]) << 5 && Number(input[i]) >= 4) {
            between45++;
            sumOfEvaluation += Number(input[i]);
        } else if (Number(input[i]) >= 3 && Number(input[i]) < 4) {
            between34++;
            sumOfEvaluation += Number(input[i]);
        } else if (Number(input[i]) < 3) {
            fail++;
            sumOfEvaluation += Number(input[i]);
        }
    }
    let topStudentsPercent = (topStudents / student) * 100;
    let between45Percent = (between45 / student) * 100;
    let between34Percent = (between34 / student) * 100;
    let failPercent = (fail / student) * 100;

    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${between45Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${between34Percent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${(sumOfEvaluation / student).toFixed(2)}`);

}
slove(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])


