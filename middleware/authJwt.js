import jwt from 'jsonwebtoken';
import configSecret from '../config/auth.config.js';
import db from "../models/user.model";
const User = db.user;

const authJwt = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ message: 'No token provided.' });
    }

    jwt.verify(token, configSecret.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized.' });
        }
        req.userId = decoded.id;
        next();
    });
}

export default authJwt;