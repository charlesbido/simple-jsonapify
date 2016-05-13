'use strict';

let should = require('chai').should();
let Meta = require('../lib/Meta.js');

describe('Meta', function() {
  describe('#json', function() {
    it('should return a valid json string');
  });
  describe('#raw', function() {
    it('should return a valid object');
    it('should set an object to raw');
  });
  describe('#append()', function() {
    it("should add a property if it doesn't exist already");
    it("should modify a property if it exists");
  });
  describe('#remove()', function() {
    it("should remove a property if it exists");
  });
});
