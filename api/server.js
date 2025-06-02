// filepath: e:\github\InfoSite\Api\server.js
require("dotenv-flow").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const matchData = require("./routes/match");
const leaderboardData = require("./routes/leaderboard");
const newGameData = require("./routes/newGameData");
const playerData = require("./routes/player");
const clearData = require("./routes/clearData");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

//const topicsRoutes = require("./routes/topics");
//const contentsRoutes = require("./routes/contents");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const port = 3000;
console.log("NODE_ENV is:", process.env.NODE_ENV);
app.use(leaderboardData);
app.use(matchData);
app.use(newGameData);
app.use(playerData);
app.use(clearData);

// Apply rate limiting to all routes except /api/newgamedata
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 75,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests, please try again later.",
});

// Apply the limiter to all requests
app.use((req, res, next) => {
  return generalLimiter(req, res, next);
});

// Makes swagger only when not in production
if (process.env.NODE_ENV !== "production") {
  require("./swagger")(app);
}
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/docs`);
});
