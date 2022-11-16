const results = localStorage.getItem("results");
console.log(JSON.parse(results));

let resultsData = [];
let titleData = [];
let descriptionData = [];
let linkData = [];
for (let i = 0; i < 10; i++) {
  resultsData[i] = document.getElementById(`result${i + 1}`);
  titleData[i] = document.getElementById(`title${i + 1}`);
  descriptionData[i] = document.getElementById(`description${i + 1}`);
  linkData[i] = document.getElementById(`link${i + 1}`);
}

document.addEventListener("load", () => {});
