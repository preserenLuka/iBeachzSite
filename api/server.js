const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("./generated/prisma");

const app = express();
app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();

app.get("/api/test", async (req, res) => {
  const users = await prisma.user.create({
    data: {
      email: "test@gmail.com",
      name: "Test User",
    },
  });
  console.log(users);
  res.json({ message: "Hello from the server!" });
});

app.listen(8080, () => {
  console.log("Server running on port 3001");
});
