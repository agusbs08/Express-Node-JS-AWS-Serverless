import * as express from "express";
import * as bodyParser from "body-parser";
import { UserRoute } from "./route/user.route";
import { AuthRoute } from "./route/auth.route";

class App {
  public app: express.Application;
  public userRoute: UserRoute = new UserRoute();
  public authRooute: AuthRoute = new AuthRoute();

  constructor() {
    this.app = express();
    this.config();
    this.userRoute.routes(this.app);
    this.authRooute.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
  }
}

export default new App().app;