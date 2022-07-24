import swaggerJSDoc from "swagger-jsdoc";

const optionsSwagger = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Test Node Project",
      version: "1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Wyvin Struys",
        url: "https://www.linkedin.com/in/wivin-struys/",
        email: "struys.wyvin@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./routes/auth.route.js"],
};

const specs = swaggerJSDoc(optionsSwagger);

export default specs;