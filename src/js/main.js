import confetti from "canvas-confetti";
const myCanvas = document.createElement("canvas")

const confettiBtn = document.getElementById("confettiBtn")

confettibtn.addEventListener("click", () =>{
    const myConfetti= confetti.create(myCanvas)
    myConfetti();
})