"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libRubberJs = require("../lib/rubber.js");

var _libRubberJs2 = _interopRequireDefault(_libRubberJs);

describe("Rubber", function () {
	var component = undefined;

	before(function () {
		component = new _libRubberJs2["default"]();
	});

	it("should say something", function () {
		component.saySomething().should.equal("Something");
	});
});