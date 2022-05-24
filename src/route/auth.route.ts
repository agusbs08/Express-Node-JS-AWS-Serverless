import { AuthController } from "../controller/auth.controller";
import { checkDuplicateName } from "../middleware/signup.middleware";

export class AuthRoute {
    public authController: AuthController = new AuthController();

    public routes(app): void {

        app.route('/').get(this.authController.index);

        app.route("/auth/signup")
            .post(checkDuplicateName, this.authController.signup);

        app.route("/auth/signin")
            .post(this.authController.signin);
    }

}