"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = require("../config/auth");
const verifyToken = (req, res, next) => {
    let token = req.headers["_token"];
    if (!token) {
        return res.status(403).json({
            message: "No token provided!"
        });
    }
    (0, jsonwebtoken_1.verify)(token.toString(), auth_1.config.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Unauthorized!"
            });
        }
        next();
    });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.middleware.js.map