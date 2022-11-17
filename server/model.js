const resultsData = require("./data");

class Result {
  constructor(resultData) {
    this.name = resultData.name;
    this.result = resultData.results;
  }
  static get all() {
    const allResults = resultsData.map((result) => new Result(result));
    return allResults;
  }

  static findByName(searchName) {
    const requestResult = resultsData.find(
      (object) => object.name.toLowerCase() == searchName.toLowerCase()
    );
    if (!requestResult) {
      return;
    }
    const found = new Result(requestResult);
    return found;
  }

  static findRandomData() {
    const randomDataIndex = getRandomInt(0, resultsData.length - 1);
    const randomData = resultsData[randomDataIndex];
    return new Result(randomData);
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
