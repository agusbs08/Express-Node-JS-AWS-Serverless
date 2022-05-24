"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const user_route_1 = require("./route/user.route");
const auth_route_1 = require("./route/auth.route");
class App {
    constructor() {
        this.userRoute = new user_route_1.UserRoute();
        this.authRooute = new auth_route_1.AuthRoute();
        this.app = express();
        this.config();
        this.userRoute.routes(this.app);
        this.authRooute.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map