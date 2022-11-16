let results = localStorage.getItem("results");
results = JSON.parse(results);

let titleData = [];
let descriptionData = [];
let linkData = [];
for (let i = 0; i < 10; i++) {
  titleData[i] = document.querySelector(`.title${i + 1}`);
  descriptionData[i] = document.querySelector(`.description${i + 1}`);
  linkData[i] = document.querySelector(`.link${i + 1}`);
}

window.addEventListener("load", () => {
  console.log(results);
  for (let i = 0; i < 10; i++) {
    if (typeof results.results[i] == "undefined") {
      return;
    }
    titleData[i].textContent = results.results[i].title;
    descriptionData[i].textContent = results.results[i].description;
    linkData[i].href = results.results[i].url;
  }
});
