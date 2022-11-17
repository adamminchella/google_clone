const express = require("express");
const router = express.Router();
const Result = require("./model");

router.get("/", (req, res) => {
  res.send(Result.all);
});

router.get("/:name", (req, res) => {
  const getResult = req.params.name;
  if (getResult == "random") {
    const result = Result.findRandomData();
    res.status(200).send(result);
  } else {
    const foundResult = Result.findByName(getResult);
    try {
      if (!foundResult) {
        throw new Error("There is no result for that search term");
      } else {
        res.send(foundResult);
      }
    } catch (error) {
      console.log(error);
      res.status(404).send({ message: error.message });
    }
  }
});

router.get("/:name/random", (req, res) => {
  try {
    const getResult = req.params.name;
    const foundResult = Result.findByName(getResult);
    if (!foundResult) {
      throw new Error("There is no result for that search term");
    }
    const random = Result.findRandomResult(foundResult);
    res.status(200).send(random);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

module.exports = router;
