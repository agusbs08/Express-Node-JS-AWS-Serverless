import { Request, Response, NextFunction } from "express";
import { User } from "../model/user.model";

export const checkDuplicateName = (req: Request, res: Response, next: NextFunction) => {
    User.findAll({
        where: {
            name : req.body.name
        }
    }).then((users: User[]) => {
        if(users.length > 0) {
            res.status(400).json({ message: "Error Duplicate Name" });
        } else {
            next();
        }
    }).catch((err: Error) => res.status(500).json({ error : err }));
}