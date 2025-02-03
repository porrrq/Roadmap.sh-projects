const questions = Array.from(document.querySelectorAll('.question'));
const answers = Array.from(document.querySelectorAll('.answer'));
const arrows = Array.from(document.querySelectorAll('.bxs-down-arrow'));
console.log(arrows)

function toggleAnswer (i) {
   answers[i].classList.toggle("hide");
   arrows[i].classList.toggle("rotate-to-180");
   arrows[i].classList.toggle("rotate-to-360");
}

questions.forEach(question => {
    question.addEventListener("click",()=>{
        let i = questions.indexOf(question)
        toggleAnswer(i)
    })
})