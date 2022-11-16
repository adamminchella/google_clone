const express = require("express");
const router = express.Router();
const Result = require("./model");

router.get("/", (req, res) => {
  res.send(Result.all);
});

router.get("/:name", (req, res) => {
  const getResult = req.params.name;
  const foundResult = Result.findByName(getResult);
  try {
    if (!foundResult) {
      throw new Error("There is no result for that name");
    } else {
      res.send(foundResult);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: error.message });
  }
});

router.get("/:name/random", (req, res) => {
  const getResult = req.params.name;
  const foundResult = Result.findByName(getResult);
  const random = Result.findRandomResult(foundResult);
  res.status(200).send(random);
});

module.exports = router;
