var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var expect = chai.expect;
chai.use(chaiAsPromised);

var pinger = require('../pinger.js');

describe("Pinger", function () {
    it ("loads the routes to ping from a file", function () {
        expect(pinger.loadConfig).to.be.called;
    })

})