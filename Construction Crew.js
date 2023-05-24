function crew(worker) {

    /*
    теглото се измерва в Кг.
    опитът в години
    и хирдратацията в мм.
    dizziness връща true/false
    */

    let workObj = worker;

    if (workObj.dizziness == true) {
        workObj.levelOfHydrated += (workObj.weight * 0.1) * workObj.experience;
        workObj.dizziness = false;
    }

    console.log(workObj);
    return workObj;

}
crew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})
crew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})
crew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
})
