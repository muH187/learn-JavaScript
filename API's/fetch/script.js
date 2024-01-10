const fact = document.querySelector("#fact")
const btn = document.querySelector("#btn")
const URL = "https://cat-fact.herokuapp.com/facts"

const getData = async () => {
    console.log("Fetching data please wait...");
    let response = await fetch(URL)
    console.log(response);
    let data = await response.json()
    fact.textContent = data[4].text
}

btn.addEventListener("click", getData)