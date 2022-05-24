"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const user_controller_1 = require("../controller/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const signup_middleware_1 = require("../middleware/signup.middleware");
class UserRoute {
    constructor() {
        this.userController = new user_controller_1.UserController();
    }
    routes(app) {
        app.route("/user/")
            .get(auth_middleware_1.verifyToken, this.userController.index)
            .post(auth_middleware_1.verifyToken, signup_middleware_1.checkDuplicateName, this.userController.create);
        app.route("/user/:id")
            .get(auth_middleware_1.verifyToken, this.userController.show)
            .put(auth_middleware_1.verifyToken, this.userController.update)
            .delete(auth_middleware_1.verifyToken, this.userController.delete);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=user.route.js.map