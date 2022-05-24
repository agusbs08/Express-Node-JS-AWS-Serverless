import { config } from "../config/auth";
import { uuid } from 'uuidv4';
import { sign } from "jsonwebtoken";
import { hashSync, compareSync } from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { User } from "../model/user.model";


export class AuthController {

    public index(req: Request, res: Response) {
        res.json({ message : "JOSS" });
    }

    public signup(req: Request, res: Response) {
        User.create({
            id : uuid(),
            name : req.body.name,
            password: hashSync(req.body.password, 8)
        }).then(() => {
            res.send({ message: "User registered successfully!" });
        }).catch((err: Error) => res.status(500).json({msg : "Error", error : err}));
    }

    public signin(req: Request, res: Response) {
        User.findOne({
            where: {
                name : req.body.name
            }
        }).then((user: User) => {
            if(!user) {
                res.status(400).json({ message : "User Not Found" });
            }

            var passwordIsValid = compareSync(
                req.body.password,
                user.password.toString()
            );
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
        
            var token = sign({ id: user.id }, config.secretKey, {
                expiresIn: 3600
            });
        
            res.status(200).json({
                id: user.id,
                name: user.name,
                _token: token
            });
        })
    }
}