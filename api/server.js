// filepath: e:\github\InfoSite\Api\server.js
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const userData = require("./routes/user");
const matchData = require("./routes/match");
const playerMatchData = require("./routes/playerMatch");
const notesData = require("./routes/notes");
const leaderboardData = require("./routes/leaderboard");
const newGameData = require("./routes/newGameData");

//const topicsRoutes = require("./routes/topics");
//const contentsRoutes = require("./routes/contents");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "InfoSite API",
      version: "1.0.0",
      description:
        "API documentation for InfoSite backend using Prisma + Express",
    },
  },
  apis: ["./controllers/*.js", "./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(userData);
app.use(notesData);
app.use(leaderboardData);
app.use(matchData);
app.use(playerMatchData);
app.use(newGameData);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/docs`);
});
