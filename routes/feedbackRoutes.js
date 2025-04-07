const express = require("express");
const { createFeedbackController } = require("../controllers/public/createFeedbackController");

const route = express.Router();

route.post("/create", createFeedbackController)

exports.feedbackRoutes = route;