"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const auth_controller_1 = require("../controller/auth.controller");
const signup_middleware_1 = require("../middleware/signup.middleware");
class AuthRoute {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
    }
    routes(app) {
        app.route('/').get(this.authController.index);
        app.route("/auth/signup")
            .post(signup_middleware_1.checkDuplicateName, this.authController.signup);
        app.route("/auth/signin")
            .post(this.authController.signin);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.route.js.map