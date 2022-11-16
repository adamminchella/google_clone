const express = require("express");
const app = express();
const port = 3000;
const resultRoutes = require("./routes");

app.listen(port, () => {
  console.log(`I am listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Google");
});

app.use("/results", resultRoutes);

module.exports = app;
