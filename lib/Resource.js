"use strict";

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
    this._attributes = {};

  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get json() {
    return JSON.stringify({
      "type": this._type,
      "id": this._id
    });
  }

  get attributes() {
    return this._attributes;
  }
}
