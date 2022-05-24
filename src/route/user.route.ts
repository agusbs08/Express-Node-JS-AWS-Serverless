import { UserController } from "../controller/user.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { checkDuplicateName } from "../middleware/signup.middleware";

export class UserRoute {
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route("/user/")
      .get(verifyToken, this.userController.index)
      .post(verifyToken, checkDuplicateName, this.userController.create);

    app.route("/user/:id")
      .get(verifyToken, this.userController.show)
      .put(verifyToken, this.userController.update)
      .delete(verifyToken, this.userController.delete)
  }
}