const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");
const seed = require("./seed");

const app = express();
app.use(morgan('dev'));

const allowedOrigins = [
  'https://user-management-lovat-ten.vercel.app',
  'http://localhost:5173', // vite dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


app.use(express.json());


// API express.Router for users
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
(async () => {
  await seed();
  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }).catch(err => {
    console.error("Unable to connect to the database:", err);
  });


})(); // Seed the database
