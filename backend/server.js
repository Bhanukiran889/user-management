const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// API express.Router for users
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });}).catch(err => {
    console.error("Unable to connect to the database:", err);
  });