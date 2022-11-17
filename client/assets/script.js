const myForm = document.querySelector("form");
myForm.addEventListener("click", getResult);
const clearInputBtn = document.querySelector(".clear-icon");
const input = document.getElementById("input");

function getResult(e) {
  e.preventDefault();
  console.log(e.target);
  const name = document.getElementById("input").value;
  if (e.target.id == "all") {
    if (!name) {
      return;
    }
    const url = `http://localhost:3000/results/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("results", JSON.stringify(data));
      });
    location.href = "./results.html";
  } else if (e.target.id == "random") {
    if (!name) {
      console.log("test");
      const url = `http://localhost:3000/results/random`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("results", JSON.stringify(data));
          location.href = "./results.html";
        });
    } else {
      const url = `http://localhost:3000/results/${name}/random`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message) {
            console.log("test");
            localStorage.setItem("results", JSON.stringify(data));
            location.href = "./results.html";
          }
          location.href = data.url;
        });
    }
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

let dummyData = ["Cats", "Dogs", "Mildred"];

function displayDropdown(recentSearches) {
  if (document.querySelectorAll(".dropdown-container").length > 0) {
    return;
  }

  const searchBar = document.querySelector(".search-bar");
  searchBar.classList.add("search-bar-dropdown-styles");

  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown-container");

  const newList = document.createElement("ol");
  recentSearches.forEach((searchString) => {
    const newListItem = document.createElement("li");
    newListItem.textContent = searchString;
    newListItem.addEventListener("click", () => {
      input.value = searchString;
      const url = `http://localhost:3000/results/${searchString}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("results", JSON.stringify(data));
        });
      location.href = "./results.html";
    });
    newList.appendChild(newListItem);
  });
  newList.classList.add("dropdown-list");

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.classList.add("list-buttons");
  const allInput = document.createElement("input");
  const randomInput = document.createElement("input");
  allInput.setAttribute("id", "all");
  allInput.setAttribute("type", "submit");
  allInput.setAttribute("value", "Google Search");
  randomInput.setAttribute("id", "random");
  randomInput.setAttribute("type", "submit");
  randomInput.setAttribute("value", "I'm Feeling Lucky");

  buttons.appendChild(allInput);
  buttons.appendChild(randomInput);

  dropdownContainer.appendChild(newList);
  dropdownContainer.appendChild(buttons);
  searchBar.appendChild(dropdownContainer);
}

input.addEventListener("click", () => {
  displayDropdown(dummyData);
});

document.addEventListener("click", (e) => {
  const dropdownContainer = document.querySelector(".dropdown-container");
  const searchBar = document.querySelector(".search-bar");
  if (
    e.target.id != "input" &&
    dropdownContainer &&
    !e.target.classList.contains("clear-icon")
  ) {
    searchBar.classList.remove("search-bar-dropdown-styles");
    dropdownContainer.remove();
  }
});
