'use strict';
const app = require('./src/app');
const serverless = require('serverless-http');

module.exports.hello = async () => {
  const { App } = await import('./src/app');
  return new App();
}