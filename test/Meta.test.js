'use strict';

let should = require('chai').should();
let Meta = require('../lib/Meta.js');

describe('Meta', function() {
  it('should be contruct a valid Meta instance', function() {
    let meta = new Meta();
    meta.should.be.instanceOf(Meta);
  });
  describe('#json', function() {
    it('should return a valid json string', function() {
      let testmeta = {test: true};
      let meta = new Meta(testmeta);
      let expectation = JSON.stringify(testmeta);
      meta.json.should.be.a('string');
      meta.json.should.equal(expectation);
    });
  });
  describe('#raw', function() {
    it('should return a valid object', function() {
      let testmeta = {test: true};
      let meta = new Meta(testmeta);
      let expectation = testmeta;
      meta.raw.should.be.an('object');
      meta.raw.should.eql(expectation);
    });
    it('should set an object to raw', function() {
      let testmeta = {test: true};
      let meta = new Meta();
      let expectation = testmeta;
      meta.raw = testmeta;
      meta.raw.should.be.an('object');
      meta.raw.should.eql(expectation);
    });
  });
  describe('#append()', function() {
    it("should add a property if it doesn't exist already", function() {
      let meta = new Meta();
      let expectation = {some: 'value'};
      meta.append('some', 'value');
      meta.raw.should.have.property('some').which.equals('value');
    });
    it("should modify a property if it exists", function() {
      let meta = new Meta();
      let expectation = {some: 'value'};
      meta.append('some', 'test');
      meta.append('some', 'value');
      meta.raw.should.have.property('some').which.equals('value');
    });
  });
  describe('#remove()', function() {
    it("should remove a property if it exists", function() {
      let meta = new Meta();
      meta.append('test', 123);
      meta.remove('test');
      meta.remove('something');
      meta.raw.should.not.have.property('test');
    });
  });
});
