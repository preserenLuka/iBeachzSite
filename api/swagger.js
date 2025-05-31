const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "InfoSite API",
      version: "1.0.0",
      description: "API documentation for InfoSite backend using Prisma + Express",
    },
  },
  apis: ["./controllers/*.js", "./routes/*.js"],
};

module.exports = (app) => {
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
