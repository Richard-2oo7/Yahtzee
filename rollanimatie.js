let boxfordice = document.querySelectorAll(".boxforedice");
let aanHetRollen = false;
var dobbelsteenGetallen = [];

generatedicesforroll();

function generatedicesforroll() {
    let iteratie = 13;
    let dicecount = 2;

    for (let i = 1; i < 6; i++) {
        dicecount = 2;
        let dicebox = document.querySelector(`.diceroll${i}`);
        for (let j = 2; j < iteratie; j++) {
            let dice = document.createElement('img');
            dice.classList.add("dobbelsteen");
            dice.src = `dobbelstenen/dice${dicecount}.png`;
            dicebox.appendChild(dice);
            dicecount++;
            if (dicecount === 7) {
                dicecount = 1;
            }
        }
    }
}
let dobbelstenen = document.querySelectorAll(".dobbelsteen");
function roll() {
    if (aanHetRollen) {
        return;
    }
    boxfordice.forEach(box => {  // reset animatie als je weer opnieuw klikt
        box.style.transition = "none";
        box.style.transform = "translateY(0%)";
        void box.offsetWidth;
        box.style.transition = "";
    })

    aanHetRollen = true;
    dobbelstenen.forEach((dobbelstenen, index) => {
        var randomnmr = Math.floor(Math.random() * 6) + 1; // nmr tussen 1 en 6
        dobbelsteenGetallen.splice();
        dobbelsteenGetallen.push(randomnmr);
        rollanimation(randomnmr, index);
    });
    console.log(dobbelsteenGetallen);
    setTimeout(() => aanHetRollen = false, 2000)
}

function rollanimation(rndNmr, index) {
    var gaps = 5 + rndNmr;


    boxfordice[index].style.transition = "transform 1s";
    boxfordice[index].style.transform = `translateY(500px)`;
    boxfordice[index].style.transform = `translateY(-${500 + (gaps * 4) + rndNmr * 100}px)`;

}

dobbelstenen.forEach(box => {
    box.addEventListener("click", function () {
        behouddobbelsteen(box);
    });
});

function behouddobbelsteen(box) {
    dobbelstenen = document.querySelectorAll(".dobbelsteen");
    dobbelstenen.forEach(box => { })
    if (!box.classList.contains("highlighted")) {
        box.style.outline = "2px solid red";
        box.classList.add("highlighted");
    } else {
        box.style.outline = "";
        box.classList.remove("highlighted");
    }
}