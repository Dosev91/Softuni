class SmartHike {
    constructor(username, goals, listOfHikes, resoureces) {

        let matchingList = [];

        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resoureces = 100;
    }

    addGoal(peak, altitude) {

        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }
    }

    hike(peak, time, difficultyLevel) {

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.goals.hasOwnProperty(peak) && this.resoureces <= 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        } else if (this.resoureces - (time * 10) < 0) {
            return `You don't have enough resources to complete the hike`;
        } else {
            this.resoureces = this.resoureces - (time * 10);
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resoureces}% resources left`;
        }
    }

    rest(time) {
        this.resoureces += time * 10;
        if (this.resoureces >= 100) {
            this.resoureces = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {

        this.matchingList = this.listOfHikes.filter(cri => cri.difficultyLevel === criteria).sort((a, b) => a.time - b.time);

        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        } else if (this.matchingList.length === 0 && criteria !== "all") {
            return `${this.username} has not done any ${criteria} hiking yet`;
        } else if (criteria === "all") {
            let allRecords = "";
            for (let i = 0; i < this.listOfHikes.length; i++) {
                allRecords += `${this.username} hiked ${this.listOfHikes[i].peak} for ${this.listOfHikes[i].time} hours\n`
            }
            return `All hiking records:\n${allRecords}`
        } else {

            return `${this.username}'s best ${criteria} hike is ${this.matchingList[0].peak} peak, for ${this.matchingList[0].time} hours`;

        }
    }
}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));

