import {signin, signup} from "../controllers/auth.controller.js";
import verifyRegister from "../middleware/verifyRegister.js";

/**
 * @swagger
 *   components: 
 *     schemas: 
 *       User:
 *         type: object
 *         required:
 *           - firstname
 *           - lastname
 *           - birthdate
 *           - username
 *           - email
 *           - password
 *         properties:
 *           id:
 *             type: integer
 *             description: The auto-generated id of the book.
 *           firstname:
 *             type: string
 *             description: The firstname of the user
 *           lastname:
 *             type: string
 *             description: The lastname of the user
 *           birthdate:
 *             type: string
 *             description: The birthdate of the user
 *           username:
 *             type: string
 *             description: The username of the user
 *           email:
 *             type: string
 *             description: The email of the user
 *           password:
 *             type: string
 *             description: The password of the user
 *           createdAt:
 *             type: string
 *             description: The register's date of the user
 *         example: 
 *           firstname: John
 *           lastname: Doe
 *           birthdate: 10/02/1993
 *           username: johndoe
 *           email: doe.john@gmail.com
 *           password: john123
 */


export default function userRoute (app) {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    /**
     * @swagger
     * tags:
     *  name: Auth
     *  description: API to manage Auth
     */

/**
   * @swagger
   * /api/auth/register:
   *   post:
   *     summary: Register a new user.
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/User'
   *     responses:
   *       201:
   *         description: Register a new User
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   */
    app.post('/api/auth/register',
        verifyRegister,
        signup
    );

    app.post('/api/auth/login', signin);
}