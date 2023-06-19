function bonusScoring(input) {

    let numStudent = Number(input[0]);
    let numLectures = Number(input[1]);
    let additionalBonus = Number(input[2]);
    let totalBonus = [];
    let attendances = [];

    for (let i = 3; i < input.length; i++) {
        let bonus = Number(input[i]) / numLectures * (5 + additionalBonus);
        totalBonus.push(Math.ceil(bonus));
        attendances.push(input[i]);

    }
    console.log(`Max Bonus: ${Math.max(...totalBonus)}.`);
    console.log(`The student has attended ${Math.max(...attendances)} lectures.`);
}
bonusScoring([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
  