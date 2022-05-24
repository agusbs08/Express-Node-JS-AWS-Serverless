"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDuplicateName = void 0;
const user_model_1 = require("../model/user.model");
const checkDuplicateName = (req, res, next) => {
    user_model_1.User.findAll({
        where: {
            name: req.body.name
        }
    }).then((users) => {
        if (users.length > 0) {
            res.status(400).json({ message: "Error Duplicate Name" });
        }
        else {
            next();
        }
    }).catch((err) => res.status(500).json({ error: err }));
};
exports.checkDuplicateName = checkDuplicateName;
//# sourceMappingURL=signup.middleware.js.map