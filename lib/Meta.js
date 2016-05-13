"use strict";

module.exports = class Meta {
  constructor(obj) {
    if (obj) {
      if(typeof obj !== 'object') {
        throw `Invalid argument: typeof obj === ${typeof obj} !== object`;
      }
      this._meta = obj;
    } else {
      this._meta = new Object();
    }
  }

  get json() {
    return JSON.stringify(this._meta);
  }

  get raw() {
    return this._meta;
  }

  set raw(value) {
    if (typeof value !== 'object') {
      throw `Invalid assignment: property 'raw' needs to be an object`;
    }
    this._meta = value;
  }

  append(key, value) {
    if (!key || typeof key !== 'string') {
      throw `Invalid argument: typeof key === ${typeof key} !== string`;
    }
    this._meta[key] = value;
  }

  remove(key) {
    if (!key || typeof key !== 'string') {
      throw `Invalid argument: typeof key === ${typeof key} !== string`;
    }
    delete this._meta[key];
  }
}
