const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
    vote: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = model("Vote", voteSchema);
