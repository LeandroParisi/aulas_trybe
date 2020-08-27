const button = document.querySelector("#button");
const outputDiv = document.querySelector("#output-area")

let clickCounter = 0;

button.addEventListener('click', (event) => {
    clickCounter += 1;
    outputDiv.innerHTML = clickCounter;
})

// Alguma melhoria??
