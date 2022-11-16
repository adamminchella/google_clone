const resultsData = require("./data");

class Result {
  constructor(resultData) {
    this.name = resultData.name;
    this.result = resultData.result;
  }
  static get all() {
    const allResults = resultsData.map((result) => new Result(result));
    return allResults;
  }

  static findByName(searchName) {
    const requestResult = resultsData.find(
      (object) => object.name.toLowerCase() == searchName.toLowerCase()
    );
    return requestResult;
  }

  static findRandomResult(foundResult) {
    const randomIndex = getRandomInt(0, foundResult.result.length - 1);
    const randomResult = foundResult.result[randomIndex];
    return randomResult;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = Result;
