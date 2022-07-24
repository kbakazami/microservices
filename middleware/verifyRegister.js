import db from "../services/sequelize.js";
const User = db.user;

export default function verifyRegister(req, res, next) {
    //Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Username is already taken !"
            });
        }

        //Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "Email is already taken !"
                });
            }
            next();
        });
    })
}
