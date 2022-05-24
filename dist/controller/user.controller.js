"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../model/user.model");
const sequelize_1 = require("sequelize");
const uuidv4_1 = require("uuidv4");
class UserController {
    index(req, res) {
        user_model_1.User.findAll({
            where: {
                deletedAt: {
                    [sequelize_1.Op.eq]: null
                }
            }
        }).then((users) => res.json({
            result: users
        })).catch((err) => res.status(500).json(err));
    }
    create(req, res) {
        user_model_1.User.create({
            id: (0, uuidv4_1.uuid)(),
            name: req.body.name
        }).then((user) => res.status(201).json(user)).catch((err) => res.status(500).json(err));
    }
    update(req, res) {
        const userId = req.params.id;
        const options = {
            where: {
                id: userId
            },
            limit: 1,
        };
        user_model_1.User.update({
            name: req.body.name
        }, options)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err) => res.status(500).json({ msg: "error", error: err }));
    }
    show(req, res) {
        const userId = req.params.id;
        user_model_1.User.findByPk(userId)
            .then((user) => {
            if (user.deletedAt != null) {
                res.status(400).json({ msg: "Data not found" });
            }
            res.status(200).json(user);
        })
            .catch((err) => {
            res.status(500).json({ msg: "error", error: err });
        });
    }
    delete(req, res) {
        const userId = req.params.id;
        const params = {
            deletedAt: Date.now()
        };
        const options = {
            where: { id: userId },
            limit: 1,
        };
        user_model_1.User.update(params, options)
            .then(() => res.status(202).json({ data: "delete success" }))
            .catch((err) => res.status(500).json(err));
    }
    showById(req, res) {
        const userId = req.body.id;
        user_model_1.User.findByPk(userId)
            .then((user) => {
            if (!user) {
                res.status(400).json({ message: "Data not found" });
            }
            res.status(200).json({ result: user });
        })
            .catch((err) => {
            res.status(500).json({ error: err });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map