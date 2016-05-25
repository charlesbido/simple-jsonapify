'use strict';

let Links = require(__dirname + "Links");
let Meta = require(__dirname + "Meta");

function Relationship(key, type, id, meta) {
  this.key = new Object();
  this.key.links = new Links();
  this.key.data = new Object();
  this.key.data.type = type
  this.key.data.id = id;
  if (meta) {
    this.key.data.meta = new Meta(meta);
  } else {
    this.key.data.meta = new Meta();
  }
}

module.exports = class Relationships {
  constructor() {
    this._relationships = new Array();
  }

  append(key, type, id, meta) {
    this._relationships.push(new Relationship(key, type, id, meta));
  }

  meta(key, value) {
    this.meta.append(key, value);
  }

  removeMeta(key) {
    this.meta.remove(key);
  }

  get json() {
    return JSON.stringify(this._relationships);
  }

  get raw() {
    return this._relationships;
  }

}
