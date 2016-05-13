'use strict';

var should = require('chai').should();
var Resource = require('../lib/Resource.js');

describe('Resource', function() {
  it('should construct the resource', function() {
    var resource = new Resource('false', 'true');
    resource.should.be.instanceof(Resource);
  });

  it("should validate the construct");


  describe("#attributes", function() {
    it('should return an object', function() {
      let resource = new Resource('type', 'id');
      var expectation = new Object();
      resource.attributes.should.be.an('object');
      resource.attributes.should.eql(expectation);
    });

    it('should set an object to attributes', function() {
      let resource = new Resource('type','id');

      let testattrs = {
        'test': 'hello world',
        'key': true
      };

      resource.attributes = testattrs;
      resource.attributes.should.have.property('test').which.equals('hello world');
      resource.attributes.should.have.property('key').which.equals(true);

    });

  });

  describe('#attr()', function() {
    it('should create a new attribute if the attribute does not exist', function() {
      let resource = new Resource('student', 'euid');
      let expectation = {
        isEnrolled: true
      }
      resource.attr('isEnrolled', true);
      resource.attributes.should.eql(expectation);
    });
    it("should modify an attribute if it exists", function() {
      let resource = new Resource('student', 'euid');
      let expectation = {
        isEnrolled: false
      }
      resource.attr('isEnrolled', true);
      resource.attributes.should.have.property('isEnrolled');
      resource.attr('isEnrolled', false);
      resource.attributes.isEnrolled.should.be.a('boolean');
      resource.attributes.isEnrolled.should.be.equal(false);
    });

  });

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
    it('should return a valid JSON string', function() {

      var resource = new Resource('asset', 'some id');

      var expectation = JSON.stringify({
        type: 'asset',
        id: "some id",
        attributes: {
          abc: 123
        }
      });

      resource.attr('abc', 123);
      resource.json.should.be.an('string');
      resource.json.should.equal(expectation);

    });
  });
});
