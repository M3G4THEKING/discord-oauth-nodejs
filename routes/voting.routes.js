const { Router } = require("express");
const { isAuthorized } = require("../utils/auth");
const router = Router();
const User = require("../models/User");
const Vote = require("../models/Vote");
router.get("/", isAuthorized, (req, res) => {
  res.render("voting", {
    guilds: req.user.guilds,
  });
});

router.get("/vote", isAuthorized, async (req, res, next) => {
  const user = await User.findOne({ discordId: req.user.discordId });

  if (user.voted) {
    res.render("warning");
  } else {
    const userEdit = await User.findOneAndUpdate(
      { discordId: req.user.discordId },
      { voted: true }
    );

    const vote = new Vote({
      vote: req.query.vote,
    });
    vote.save();
  }

  res.render("vote");
});

module.exports = router;
