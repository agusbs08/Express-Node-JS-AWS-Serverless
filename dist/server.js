"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const serverless = require("serverless-http");
module.exports.handler = serverless(app_1.default);
//# sourceMappingURL=server.js.map