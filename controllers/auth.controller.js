import db from '../services/sequelize.js';
import configSecret from '../config/auth.config.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.user;

export function signup(req, res){

    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        createdAt: new Date()
    })
        .then(user => {
            res.status(200).send({ message: 'User created successfully' });
        })
        .catch(err => {
            res.status(500).send({ message: 'Error creating user' });
        });
}

export function signin(req, res){
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if(!user) {
                return res.status(404).send({ message: 'User Not Found.' });
            }

            let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if(!passwordIsValid) {
                return res.status(401).send({ accessToker: null, message: 'Invalid Password!' });
            }

            let token = jwt.sign({ id: user.id }, configSecret.secret, { expiresIn: 86400 });

            return res.status(200).send({
                id: user.id,
                username: user.username,
                accessToken: token
            });

        })
        .catch(err => {
            res.status(500).send({ message: 'Error finding user' });
        });
}