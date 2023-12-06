const { expect } = require('chai');
const petAdoptionAgency = require('./path_to_petAdoptionAgency_file'); 

describe("Tests for petAdoptionAgency object", function() {

    describe("Testing isPetAvailable function", function() {
        it("Should return correct message when pet is available and vaccinated", function() {
            const result = petAdoptionAgency.isPetAvailable("Dog", 5, true);
            expect(result).to.equal("Great! We have 5 vaccinated Dog(s) available for adoption at the agency.");
        });

        it("Should return correct message when pet is available but needs vaccination", function() {
            const result = petAdoptionAgency.isPetAvailable("Cat", 3, false);
            expect(result).to.equal("Great! We have 3 Cat(s) available for adoption, but they need vaccination.");
        });

        it("Should return correct message when no pets are available", function() {
            const result = petAdoptionAgency.isPetAvailable("Bird", 0, true);
            expect(result).to.equal("Sorry, there are no Bird(s) available for adoption at the agency.");
        });

        it("Should throw an error for invalid input", function() {
            expect(() => petAdoptionAgency.isPetAvailable("Rabbit", "not a number", true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("Rabbit", 5, "not boolean")).to.throw("Invalid input");
        });
    });

    describe("Testing getRecommendedPets function", function() {
        const petList = [
            { name: "Buddy", traits: "Friendly" },
            { name: "Max", traits: "Playful" },
            { name: "Charlie", traits: "Friendly" }
        ];

        it("Should return recommended pets with desired traits", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Friendly");
            expect(result).to.equal("Recommended pets with the desired traits (Friendly): Buddy, Charlie");
        });

        it("Should return no recommended pets with desired traits", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Energetic");
            expect(result).to.equal("Sorry, we currently have no recommended pets with the desired traits: Energetic.");
        });

        it("Should throw an error for invalid input", function() {
            expect(() => petAdoptionAgency.getRecommendedPets("not an array", "Friendly")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(petList, 123)).to.throw("Invalid input");
        });
    });

    describe("Testing adoptPet function", function() {
        it("Should return success message for adoption", function() {
            const result = petAdoptionAgency.adoptPet("Fluffy", "John");
            expect(result).to.equal("Congratulations, John! You have adopted Fluffy from the agency. Enjoy your time with your new furry friend!");
        });

        it("Should throw an error for invalid input", function() {
            expect(() => petAdoptionAgency.adoptPet(123, "John")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("Fluffy", null)).to.throw("Invalid input");
        });
    });

});
