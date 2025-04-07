const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require("./config/db");
const { feedbackRoutes } = require("./routes/feedbackRoutes");

// configurations
dotenv.config();
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/feedback", feedbackRoutes);

// Server run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT +" 🏃🏃🏃");
});