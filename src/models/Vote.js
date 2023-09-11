const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
    vote: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Vote", voteSchema);
