let results = localStorage.getItem("results");
let parsedResults = JSON.parse(results);


let displayUrl = [];
let titleData = [];
let descriptionData = [];
let linkData = [];
for (let i = 0; i < results.length; i++)  {
  displayUrl[i] = document.querySelector(`.urldisp${i + 1}`);
  titleData[i] = document.querySelector(`.title${i + 1}`);
  descriptionData[i] = document.querySelector(`.description${i + 1}`);
  linkData[i] = document.querySelector(`.link${i + 1}`);
}


window.addEventListener("load", () => {
  console.log(parsedResults);
  if (parsedResults.message) {
    descriptionData[0].textContent = parsedResults.message;
    return;
  }
  for (let i = 0; i < results.length; i++) {
    if (typeof parsedResults.result[i] == "undefined") {
      return;
    }

    let resultLength = parsedResults.result.length
    console.log(resultLength)

    for (let i =0; i < resultLength; i++) {
      h3 = document.createElement("h3") = textContent("Hello");
      h3.textContent = parsedResults.result[i].displayurl;
    }
    // displayUrl[i].textContent = parsedResults.result[i].displayurl;
    // titleData[i].textContent = parsedResults.result[i].title;
    // descriptionData[i].textContent = parsedResults.result[i].description;
    // linkData[i].href = parsedResults.result[i].url;
  }
});



