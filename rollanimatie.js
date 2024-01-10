document.addEventListener("DOMcontentLoaded", function () {
    document.body.style.zoom = "75%"
})


let boxfordice = document.querySelectorAll(".boxforedice");
let aanHetRollen = false;
var dobbelsteenGetallen = [];
generatedicesforroll();
var dobbelstenen = document.querySelectorAll(".dobbelsteen");


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


function roll() {

    if (aanHetRollen) {
        return;
    }

    boxfordice.forEach(box => {  // reset dobbelstenen naar 0
        resetDice(box)
    })

    boxfordice.forEach((box, index) => {
        if (isHighlighted(box)) {

        } else {
            var randomnmr = Math.floor(Math.random() * 6) + 1; // nmr tussen 1 en 6
            dobbelsteenGetallen[index] = randomnmr;
        }

        rollanimation(randomnmr, index);
    });
    console.log(dobbelsteenGetallen);
    aanHetRollen = true;
    setTimeout(() => aanHetRollen = false, 2000)
}


function isHighlighted(box) {
    var childs = box.children;
    for (let i = 0; i < childs.length; i++) {
        if (childs[i].classList.contains("highlighted")) {
            return true;
        }
    }
}


function resetDice(box) {
    if (isHighlighted(box)) {

    } else {
        box.style.transition = "none";
        box.style.transform = "translateY(0%)";
        void box.offsetWidth;
        box.style.transition = "";
    }

}

function rollanimation(rndNmr, index) {
    var gaps = 5 + rndNmr;
    if (index > 4) {
        return;
    }

    var childs = boxfordice[index].children;
    for (let i = 0; i < childs.length; i++) {
        if (childs[i].classList.contains("highlighted")) {
            return;
        }
    }

    boxfordice[index].style.transform = `translateY(500px)`;
    boxfordice[index].style.transition = "transform 1s";
    boxfordice[index].style.transform = `translateY(-${500 + (gaps * 7) + rndNmr * 100}px)`;

}
dobbelstenen.forEach(box => {
    box.addEventListener("click", function () {
        behouddobbelsteen(box);
    });
});

function behouddobbelsteen(box) {
    dobbelstenen = document.querySelectorAll(".dobbelsteen");
    dobbelstenen.forEach(box => { })
    if (box.style.outline == "") {
        box.style.outline = "2px solid red";
        box.classList.add("highlighted");
    } else {
        box.style.outline = "";
        box.classList.remove("highlighted");
    }
}
