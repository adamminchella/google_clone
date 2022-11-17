let results = localStorage.getItem("results");
let parsedResults = JSON.parse(results);

let titleData = [];
let descriptionData = [];
let linkData = [];
for (let i = 0; i < 10; i++) {
  titleData[i] = document.querySelector(`.title${i + 1}`);
  descriptionData[i] = document.querySelector(`.description${i + 1}`);
  linkData[i] = document.querySelector(`.link${i + 1}`);
}

window.addEventListener("load", () => {
  console.log(parsedResults);
  for (let i = 0; i < 10; i++) {
    if (typeof parsedResults.result[i] == "undefined") {
      return;
    }
    titleData[i].textContent = parsedResults.result[i].title;
    descriptionData[i].textContent = parsedResults.result[i].description;
    linkData[i].href = parsedResults.result[i].url;
  }
});
