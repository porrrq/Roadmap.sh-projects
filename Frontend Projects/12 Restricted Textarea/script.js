const input = document.querySelector('.input');
const wordCounter = document.querySelector('.word-counter');
let counter = 0

input.addEventListener("keyup", (event) => {
    counter = input.value.length
    console.log(counter)
    if (counter === 250) {
        input.classList.add("exeed")
        wordCounter.classList.add("red")
    }
    else {
        input.classList.remove("exeed")
        wordCounter.classList.remove("red")
    }
    wordCounter.textContent = `${counter} / 250` 
})