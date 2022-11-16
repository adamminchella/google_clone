const myForm = document.querySelector("form").addEventListener("submit", getResult());

function getResult(e) {
    e.preventDefault();
    const name = document.getElementById("input").value;
    const text = document.getElementById("result");
    const url = `http://localhost:3000/results/${name}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            text.textContent = data
            });
    }


