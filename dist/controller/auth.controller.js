"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_1 = require("../config/auth");
const uuidv4_1 = require("uuidv4");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = require("bcrypt");
const user_model_1 = require("../model/user.model");
class AuthController {
    index(req, res) {
        res.json({ message: "JOSS" });
    }
    signup(req, res) {
        user_model_1.User.create({
            id: (0, uuidv4_1.uuid)(),
            name: req.body.name,
            password: (0, bcrypt_1.hashSync)(req.body.password, 8)
        }).then(() => {
            res.send({ message: "User registered successfully!" });
        }).catch((err) => res.status(500).json({ msg: "Error", error: err }));
    }
    signin(req, res) {
        user_model_1.User.findOne({
            where: {
                name: req.body.name
            }
        }).then((user) => {
            if (!user) {
                res.status(400).json({ message: "User Not Found" });
            }
            var passwordIsValid = (0, bcrypt_1.compareSync)(req.body.password, user.password.toString());
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            var token = (0, jsonwebtoken_1.sign)({ id: user.id }, auth_1.config.secretKey, {
                expiresIn: 3600
            });
            res.status(200).json({
                id: user.id,
                name: user.name,
                _token: token
            });
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map