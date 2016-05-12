'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var Resource = require('../lib/Resource.js');

describe('Resource', function() {
  it('should construct the resource', function() {
    var resource = new Resource('false', 'true');
    resource.should.be.instanceof(Resource);
  });

  it("should validate the construct");
  describe('#id', function() {
    it('should return the id of the resource', function() {
      var resource = new Resource('asset', 'hello');
      var expectation = "hello"
      resource.id.should.be.a('string');
      resource.id.should.equal(expectation);
    });
    it('should set the id of the resource', function() {
      var resource = new Resource('asset', 'some id');
      var testid = 'af7as98f';
      resource.id = testid;
      resource.id.should.equal(testid);
    });
  });
  describe('#type', function() {
    it('should return the type of the resource', function() {
      var resource = new Resource('asset', 'some id');
      var expectation = 'asset';
      resource.type.should.be.a('string');
      resource.type.should.equal(expectation);
    });
    it('should set the type of the resource', function() {
      var resource = new Resource('asset', 'some id');
      var testtype = 'sometesttype';
      resource.type = testtype;
      resource.type.should.equal(testtype);
    });
  });
  describe('#json', function() {
    it('should return a valid JSON object', function() {

      var resource = new Resource('asset', 'some id');

      var expectation = JSON.stringify({
        "type": 'asset',
        "id": "some id"
      });

      resource.json.should.be.an('string');
      resource.json.should.equal(expectation);

    });
  });
});
