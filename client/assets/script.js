const myForm = document.querySelector("form");
myForm.addEventListener("click", getResult);
const input = document.getElementById("input");
const clearInputBtn = document.querySelector(".clear-icon");

let results = [];
for (let i = 0; i < 10; i++) {
  results[i] = document.getElementById(`result${i + 1}`);
}

function getResult(e) {
  e.preventDefault();
  console.log(e.target);
  const name = document.getElementById("input").value;
  if (e.target.id == "all") {
    const url = `http://localhost:3000/results/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 10; i++) {
          results[i].textContent = data.results[i];
        }
      });
  } else if (e.target.id == "random") {
    const url = `http://localhost:3000/results/${name}/random`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        clearData();
        location.href = data.url;
      });
  }
}

function clearData() {
  for (let i = 0; i < 10; i++) {
    results[i].textContent = "";
  }
}

input.addEventListener("input", () => {
  clearInputBtn.classList.remove("transparent");
  if (!input.value) {
    clearInputBtn.classList.add("transparent");
  }
});

clearInputBtn.addEventListener("click", () => {
  console.log("test");
  input.value = "";
  clearInputBtn.classList.add("transparent");
});
