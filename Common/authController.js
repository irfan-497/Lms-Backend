// 
const { models } = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../Config');

let tokens = [];

const generateToken = (data) => {
    return jwt.sign(data, config.jwtSecret);
};

module.exports = {
    verifyToken: (req, res, next) => {
        let token = req.headers['authorization'];
        token = token && token.split(" ")[1];

        if (!token) {
            return res.sendStatus(401);
            
        } else {
            if (!tokens.includes(token)) {
                return res.sendStatus(401);
            }
            jwt.verify(token, config.jwtSecret, (err, data) => {
                if (err) {                   
                    return res.sendStatus(403);
                }
                console.log(data);
                req.user = data;
                next();
            });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            let user = await models.user.findOne({ where: { email: email } });

            if (user) {
                user = user.dataValues;

                if (await bcrypt.compare(password, user.password)) {
                    const Token = generateToken({ id: user.id });
                    tokens.push(Token);
                    console.log(tokens);
                    return res.json({ "Token": Token });
                } else {
                    return res.send("Wrong password");
                }
            } else {
                return res.send("User not found");
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send("Internal Server Error");
        }
    }
};
