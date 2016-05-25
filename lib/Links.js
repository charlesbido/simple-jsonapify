
'use strict';

var Meta = require(__dirname + '/Meta');

function Link(href, meta) {
  if (!href || typeof href !== 'string') {
    throw `Invalid argument: typeof href === ${typeof href} !== string`;
  } else {
    this.href = href;
  }

  if (meta) {
    if (typeof meta !== 'object') {
      throw `Invalid argument: typeof meta === ${typeof meta} !== object`;
    } else {
      this.meta = new Meta(meta);
    }
  } else {
    this.meta - new Meta();
  }

}

module.exports = class Links {
  constructor() {
    this._links = new Object();
  }

  get json() {
    return JSON.stringify(this._links);
  }

  get raw() {
    return this._links;
  }

  append(key, href, meta) {
    if (!key || typeof key !== "string") {
      throw `Invalid argument: typeof key === ${typeof key} !== string`;
    }
    if (!href || typeof href !== "string") {
      throw `Invalid argument: typeof href === ${typeof href} !== string`;
    }
    this._links[key] = new Link(href, meta);
  }


}
