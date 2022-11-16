const myForm = document.querySelector("form");
myForm.addEventListener("click", getResult);
const input = document.getElementById("input");
const clearInputBtn = document.querySelector(".clear-icon");

function getResult(e) {
  e.preventDefault();
  console.log(e.target);
  const name = document.getElementById("input").value;
  if (e.target.id == "all") {
    const url = `http://localhost:3000/results/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("results", JSON.stringify(data));
      });
    location.href = "./results.html";
  } else if (e.target.id == "random") {
    const url = `http://localhost:3000/results/${name}/random`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.href = data.url;
      });
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
