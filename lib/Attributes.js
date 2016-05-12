'use strict';

module.exports = class Attributes {
  constructor() {
    this._attributes = new Object();
  }

  get raw() {
    // console.log(`this._attributes === ${this._attributes}`);
    return this._attributes;
  }

  set raw(value) {
    if (typeof value !== 'object') {
      throw `Invalid assignment: Needs to be of type 'object', not ${typeof value}`;
    }
    this._attributes = value;
  }

  attr(key, value) {
    if (!key || typeof key !== 'string') {
      throw `Invalid arguement: typeof key === ${typeof key} !== string`;
    }
    this._attributes[key] = value;
  }

  remove(key) {
    if (!key || typeof key !== 'string') {
      throw `Invalid arguement: typeof key === ${typeof key} !== string`;
    }
    try {
      delete this._attributes[key];
    } catch (err) {
      throw err;
    }
  }

  get json() {
    return JSON.stringify(this._attributes);
  }
}
