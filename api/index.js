const app = require("../app");
const { PORT } = require("../config");
require("../db");
// app.listen(PORT, () => console.log("server is running on port", PORT));
module.exports = app;
