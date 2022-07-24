import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger.config.js";
import db from "./services/sequelize.js";
import fileUpload from "express-fileupload";

// Import Routes
import userRoute from "./routes/auth.route.js";
import uploadRoute from "./routes/upload.route.js";

const app = express();

// Enable file upload
app.use(fileUpload({
  createParentPath: true
}));


// Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// parse request of content type: application/json
app.use(bodyParser.json());

// parse request of content type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to API' });
});

userRoute(app);
uploadRoute(app);

app.listen(4000, () => {
  console.log("serveur run");
});