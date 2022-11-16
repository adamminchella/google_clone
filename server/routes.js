

const express = require("express");
const router = express.Router();
const data = require("./data");

router.get("/", (req, res) => {
    res.send(data.all);
})

router.get("/:name", (req, res) => {
    const getResult = req.params.name;
    const foundResult = findByName(getResult);
    try {
        if (!foundResult) {
            throw new Error("There is no result for that name")
        }
        else {
            res.send(foundResult)
        }
    }
    catch(error) {
        console.log(error)
        res.status(404).send({ message: error.message})
    }
})

module.exports = router;



