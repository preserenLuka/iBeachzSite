const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SQL_R.Luka.p!",
  database: "ibeachz",
});

// Test the connection
db.connect((err) => {
  // Change 'connection' to 'db'
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected to MySQL as id " + db.threadId);
});

// Your server setup
app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/api/test", (req, res) => {
  db.query("SELECT * FROM test", (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results); // Send the results of the query as JSON
  });
});
