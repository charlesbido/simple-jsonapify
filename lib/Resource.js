"use strict";

var Attributes = require(__dirname + '/Attributes');

module.exports = class Resource {
  constructor(type, id) {
    if (!type || typeof type !== 'string') {
      throw `Invalid argument: typeof type === ${typeof type} !== string`;
    }
    if (!id || typeof id !== 'string') {
      throw `Invalid argument: typeof id === ${typeof id} !== string`;
    }
    this._type = type;
    this._id = id;
    this._attributes = new Attributes();

  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (typeof value !== 'string') {
      throw `Invalid assignment: property 'id' needs to be a string`;
    }
    this._id = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (typeof value !== 'string') {
      throw `Invalid assignment: property 'type' needs to be a string`;
    }
    this._type = value;
  }

  get json() {
    return JSON.stringify({
      type: this._type,
      id: this._id,
      attributes: this._attributes.raw
    });
  }

  get attributes() {
    return this._attributes.raw;
  }

  set attributes(value) {
    if (typeof value !== 'object') {
      throw `Invalid assignment: property 'attributes' needs to be an object`;
    }
    this._attributes.raw = value;
  }

  attr(key, value) {
    if(!key || typeof key !== 'string') {
      throw `Invalid argument: typeof key === ${typeof key} !== string`;
    }
    this._attributes.attr(key, value);
  }
}
