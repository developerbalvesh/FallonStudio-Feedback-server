const { feedbackServices } = require("../../services/feedbackService");

exports.createFeedbackController = async (req, res) => {
  try {
    const { fullName, email, feedbackMessage } = req.body;
    if (!fullName || !email || !feedbackMessage) {
      return res.status(400).send({
        success: false,
        message: "Empty fields not allowed!",
      });
    }

    if (
      email.split("").filter((e) => e === "@").length != 1 ||
      !email.includes(".")
    ) {
      return res.status(400).send({
        success: false,
        message: "Enter valid Email Address",
      });
    }

    await feedbackServices.createFeedback(req.body);

    res.status(200).send({
      success: true,
      message: "Feedback added successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
};
