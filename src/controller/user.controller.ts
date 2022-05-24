import {Request, Response} from "express";
import { User } from "../model/user.model"
import {UpdateOptions, Op} from "sequelize";
import { uuid } from 'uuidv4';

export class UserController {

  public index(req: Request, res: Response) {
    User.findAll<User>({
      where: {
        deletedAt: {
            [Op.eq]: null
          }
        }
      }).then((users: Array<User>) => 
        res.json({
          result : users
        })
      ).catch((err: Error) => 
        res.status(500).json(err)
      );

  }

  public create(req: Request, res: Response) {

    User.create<User>({
      id : uuid(),
      name : req.body.name
     }).then((user: User) => 
        res.status(201).json(user)
      ).catch((err: Error) => 
        res.status(500).json(err)
      );
  }

  public update(req: Request, res: Response) {
    const userId: string = req.params.id;

    const options: UpdateOptions = {
      where: {
        id: userId
      },
      limit: 1,
    };

    User.update({
      name : req.body.name
    }, options)
      .then(() => res.status(202).json({data: "success"}))
      .catch((err: Error) => res.status(500).json({ msg: "error", error: err }));
  }

  public show(req: Request, res: Response) {
    const userId: string = req.params.id;

    User.findByPk<User>(userId)
      .then((user: User) => {
        if(user.deletedAt != null) {
          res.status(400).json({ msg: "Data not found" });
        }
        
        res.status(200).json(user);
      })
      .catch((err: Error) => {
          res.status(500).json({ msg : "error", error : err })
      });
  }

  public delete(req: Request, res: Response) {
    const userId: string = req.params.id;
    const params = {
      deletedAt : Date.now()
    };

    const options: UpdateOptions = {
      where: {id: userId},
      limit: 1,
    };

    User.update<User>(params, options)
      .then(() => res.status(202).json({data: "delete success"}))
      .catch((err: Error) => res.status(500).json(err));
  }

  public showById(req: Request, res: Response) {
    const userId: string = req.body.id;

    User.findByPk(userId)
      .then((user: User | null) => {
          if(!user) {
            res.status(400).json({ message : "Data not found" });
          }

          res.status(200).json({ result: user });
      })
      .catch((err: Error) => {
          res.status(500).json({ error: err });
      });
  }
}