'use strict';

let should = require('chai').should();
let Links = require('../lib/Links.js');

describe('Links', function() {
  it('should be an instance of Links', function() {
    let links = new Links();
    links.should.be.an.instanceOf(Links);
  });
  describe('#json', function() {
    it('should return a valid json string', function() {
      let links = new Links();
      links.json.should.be.a('string').and.equal('{}');
    });
  });
  describe('#raw', function() {
    it('should return a valid object', function() {
      let links = new Links();
      links.raw.should.be.an('object').and.eql({});
    });
    // it('should set an object to raw', function() {
    //   links.raw.should.be.an('object').and.eql(testitem)
    // });
  });
  describe('#append()', function() {
    it("should add a link object if it doesn't exist already", function() {
      let links = new Links();
      links.append('self', "true");
      links.raw.should.have.property('self');
      links.raw.self.href.should.equal('true');
    });
    it("should modify a link object if it exists");
  });
  describe('#remove()', function() {
    it("should remove a property if it exists");
  });

  describe('#meta()', function() {
    it("should ")
  })
});
