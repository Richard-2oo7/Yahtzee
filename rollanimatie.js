let dobbelsteen = document.querySelectorAll(".dobbelsteen");
let boxfordice = document.querySelectorAll(".boxforedice");
let aanHetRollen = false;
var dobbelsteenGetallen = [];


function roll() {
    if (aanHetRollen) {
        return;
    }
    boxfordice.forEach(box =>{
        box.style.transition = "none";
        box.style.transform = "translateY(0%)";
        void box.offsetWidth;
        box.style.transition = "";
    })

    aanHetRollen = true;
    dobbelsteen.forEach((dobbelsteen, index) => {
        var randomnmr = Math.floor(Math.random() * 6) + 1; // nmr tussen 1 en 6
        dobbelsteenGetallen.push(randomnmr);
        rollanimation(randomnmr, index);
    });
    console.log(dobbelsteenGetallen);
    setTimeout(() => aanHetRollen = false, 2000)
}

function rollanimation(rndNmr, index) {
    var gaps = 5 + rndNmr;
    boxfordice[index].style.transition = `transform 1s`;
    boxfordice[index].style.transform = `translateY(500px)`;
    boxfordice[index].style.transform = `translateY(-${500 + (gaps * 4) + rndNmr * 100}px)`;
}

function generatedicesforroll() {
    let iteratie = 13;
    let dicecount = 2;

    for (let i = 1; i < 6; i++) {
        dicecount = 2;
        let dicebox = document.querySelector(`.diceroll${i}`);
        for (let j = 2; j < iteratie; j++) {
            let dice = document.createElement('img');
            dice.src = `dobbelstenen/dice${dicecount}.png`;
            dicebox.appendChild(dice);
            dicecount++;
            if (dicecount === 7) {
                dicecount = 1;
            }
        }
    }
}

generatedicesforroll();


boxfordice.forEach(box =>{
    box.addEventListener("click", behouddobbelsteen)

})

function behouddobbelsteen(){
    console.log("dbstn");
    this.style.width = "103px";
    this.style.height = "103px";
    this.style.border = "3px solid red";
}
