class Triathlon {
    constructor(competitionName, participants = {}, listOfFinalists = []) {

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {

        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }

    completeness(participantName, condition) {

        const completedCount = Math.round(condition / 30);

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        } else if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        } else if (completedCount !== 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        } else {
            const obj = {
                [participantName]: this.participants[participantName]
            }
            delete this.participants[participantName];

            this.listOfFinalists.push(obj);
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }

    rewarding(participantName) {

        const found = this.listOfFinalists.some(obj => obj.hasOwnProperty(participantName));

        if (found) {
            return `${participantName} was rewarded with a trophy for his performance`;
        } else {
            return `${participantName} is not in the current finalists list`;
        }
    }

    showRecord(criteria) {

        const filteredObjects = this.listOfFinalists.filter(obj => {
            return Object.values(obj).some(value => value === criteria);
        });

        const keysOfFilteredObjects = filteredObjects.map(obj => Object.keys(obj));

        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        } else if (keysOfFilteredObjects.length === 0 && criteria !== "all") {
            return `There are no ${criteria}'s that finished the competition`
        } else if (criteria !== "all" && keysOfFilteredObjects.length !== 0) {
            return `${keysOfFilteredObjects[0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else if (criteria === "all") {
            const nameOfFinalist = this.listOfFinalists.map(obj => Object.keys(obj));
            nameOfFinalist.sort((keysA, keysB) => {
                const keyA = keysA[0];
                const keyB = keysB[0];
                return keyA.localeCompare(keyB);
            });
            let names = '';
            nameOfFinalist.forEach(el => {
                names += `${el[0]}\n`
            });
            return `List of all ${this.competitionName} finalists:\n${names}\n `
        }

    }
}


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
