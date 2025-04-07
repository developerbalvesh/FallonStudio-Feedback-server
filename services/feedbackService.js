const { feedbackModel } = require("../models/feedbackModel");

exports.feedbackServices = {
  createFeedback: async (data) => {
    try {
      await feedbackModel(data).save();
    } catch (error) {
      throw error;
    }
  },
};
