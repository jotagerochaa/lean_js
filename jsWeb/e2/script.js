let input = document.getElementById("input")

let input2 = document.getElementById("input2")

let div = document.getElementById("div")

let button = document.getElementById("btn")

button.addEventListener("click", () => {
    div.innerHTML +=input.value + " <br>"
})