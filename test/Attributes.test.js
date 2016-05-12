'use strict';

var should = require('chai').should();


describe('Attributes', function() {

  var Attributes = require('../lib/Attributes');

  it('should exist', function() {
    let attributes = new Attributes();
    attributes.should.be.instanceof(Attributes);
  });

  describe('#raw', function() {
    it('should return an object', function() {
      let attributes = new Attributes();
      var expectation = new Object();
      attributes.raw.should.be.an('object');
      attributes.raw.should.eql(expectation);
    });
    it('should set an object as the attributes', function() {
      let attributes = new Attributes();
      var testattrs = {
        test: 'whatever',
        item: 'asdf',
        boolean: false,
        number: 12
      };

      attributes.raw = testattrs;
      attributes.raw.should.be.an('object');
      attributes.raw.should.eql(testattrs);
    });
  });

  describe('#attr()', function() {

    it("should add an attribute if it doesn't already exist", function() {
      let attributes = new Attributes();
      var testattrs = {
        item: 'asdf'
      };
      var expectation = {
        item: 'asdf',
        name: 'value'
      }
      attributes.raw = testattrs;
      attributes.raw.should.have.property('item').which.is.a('string');
      attributes.attr('name', 'value');
      attributes.raw.should.eql(expectation);
    });

    it("should modify an attribute if it exists", function() {
      let attributes = new Attributes();
      var testattrs = {
        item: 'asdf',
        name: 'value'
      }
      var expectation = {
        item: 'asdf',
        name: true
      }
      attributes.raw = testattrs;
      attributes.raw.should.have.property('item').which.is.a('string');
      attributes.raw.should.have.property('name').which.is.a('string');
      attributes.attr('name', true);
      attributes.raw.should.have.property('name').which.is.a('boolean');
      attributes.raw.should.eql(expectation);
    });

  });

  describe('#remove()', function() {
    it('should remove an attribute if it exists', function() {
      let attributes = new Attributes();
      var testattrs = {
        item: 'asdf',
        name: 'value'
      };
      var expectation = {
        item: 'asdf'
      };
      attributes.raw = testattrs;
      attributes.remove('name');
      attributes.raw.should.eql(expectation);
      attributes.raw.should.not.have.property('name');
      attributes.remove('item');
      attributes.raw.should.not.have.property('item');
    });
  });

  describe("#json", function() {
    it('should return a valid JSON string', function() {
      let attributes = new Attributes();
      let expectation = JSON.stringify({
        test: 123,
        someotherthing: false
      });
      attributes.attr('test', 123);
      attributes.attr('someotherthing', false);
      attributes.attr('someotherthing', true);
      attributes.attr('someotherthing', false);
      attributes.json.should.be.a('string');
      attributes.json.should.equal(expectation);
    });
  });

});
