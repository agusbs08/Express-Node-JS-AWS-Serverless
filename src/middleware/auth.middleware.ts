import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../config/auth";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers["_token"];

    if (!token) {
        return res.status(403).json({
        message: "No token provided!"
        });
    }
    
    verify(token.toString(), config.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Unauthorized!"
            });
        }
        next();
    });
}