const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    } if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}
describe("Теst char lookup fuctionality", () => {
    it("Should return undefined when non-string is provided", () => {
        expect(lookupChar(true, 2)).to.be.equal(undefined);
    })
    it("Should return undefined when non-integer is provided", () => {
        expect(lookupChar("44", "h")).to.be.equal(undefined);
    })
    it("Should return Incorrect index when string lingth is bigger", () => {
        expect(lookupChar("Dosev", 6)).to.be.equal("Incorrect index");
    })
    it("Should return Incorrect index when index is less then 0 ", () => {
        expect(lookupChar("Dosev", -1)).to.be.equal("Incorrect index");
    })
    
})
