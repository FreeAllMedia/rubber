import Rubber from "../lib/rubber.js";

describe("Rubber", () => {
	let component;

	before(() => {
		component = new Rubber();
	});

	it("should say something", () => {
		component.saySomething().should.equal("Something");
	});
});
