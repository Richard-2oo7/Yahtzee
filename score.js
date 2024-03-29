const dataCell = document.querySelectorAll(".scorecell");
const innerdataCell = document.querySelectorAll(".innerdata");

var rowDataCells = [[],[]];
var scoreArraysPlayers = [[],[]]
var collumnDatacells = [];
var innerdatacells = [];
var scoreArr = [];
var game = 1;
var index = 0;
var scoreTabelsArray = [];
var player = 1;
selectDatacells();

function viewScore() {

    keepScore();
    const counts = {};
    for (let i = 0; i < dobbelsteenGetallen.length; i++) {
        const die = dobbelsteenGetallen[i] - 1;
        counts[die] = (counts[die] || 0) + 1;
    }
    const values = Object.values(counts);

    for (var i = 0; i < collumnDatacells.length; i++) {
        if (i < 6) {
            if (counts[i] == undefined) {
                collumnDatacells[i].innerHTML = scoreArr[i];
                if (scoreArr[i] == undefined) {
                    collumnDatacells[i].innerHTML = "0";
                }
                continue;
            }

            if (scoreArr[i] == undefined) {
                collumnDatacells[i].innerHTML = "";
                collumnDatacells[i].innerHTML = counts[i] * (i + 1);
            } else {
                collumnDatacells[i].innerHTML = scoreArr[i];
            }
        }
    }

    //---------------------------------------------------------------
    if (scoreArr[9] == undefined) {
        if (isThreeOfAKind(values)) {
            collumnDatacells[9].innerHTML = countAllDices(dobbelsteenGetallen);
        } else {
            collumnDatacells[9].innerHTML = "0";
        }
    }
    if (scoreArr[10] == undefined) {
        if (isFourOfAKind(values)) {
            collumnDatacells[10].innerHTML = countAllDices(dobbelsteenGetallen);
        } else {
            collumnDatacells[10].innerHTML = "0";
        }
    }
    if (scoreArr[11] == undefined) {
        if (isFullHouse(values)) {
            collumnDatacells[11].innerHTML = 25;
        } else {
            collumnDatacells[11].innerHTML = "0";
        }
    }
    if (scoreArr[12] == undefined) {
        if (isSmallStaight(dobbelsteenGetallen)) {
            collumnDatacells[12].innerHTML = 30;
        } else {
            collumnDatacells[12].innerHTML = "0";
        }
    }
    if (scoreArr[13] == undefined) {
        if (isLargeStraight(dobbelsteenGetallen)) {
            collumnDatacells[13].innerHTML = 40;
        } else {
            collumnDatacells[13].innerHTML = "0";
        }
    }
    if (scoreArr[14] == undefined) {
        if (isYahtzee(values)) {
            collumnDatacells[14].innerHTML = 50;
        } else {
            collumnDatacells[14].innerHTML = "0";
        }
    }
    // is kans
    if (scoreArr[15] == undefined) {
        collumnDatacells[15].innerHTML = countAllDices(dobbelsteenGetallen);
    }
    if (scoreArr[14] != undefined && index < 4 && values.length == 1) {
        innerdatacells[index].innerHTML = "&#10004";
        collumnDatacells[16].innerHTML = 100 * index + 100;
        scoreArr[16] = 100 * index + 100;
        index++;
    }
    //-------------------------------------------------------------------
}

function selectDatacells() {
    
    innerdatacells = [];
    scoreArraysPlayers[player] = scoreArr;
    scoreArr = [];
    player == 0 ? player++ : player--;
    scoreArr = scoreArraysPlayers[player];

    for (var i = game - 1; i < dataCell.length; i += 3) {
        if(rowDataCells[0].length >= 20){
            if (rowDataCells[1].length >= 20) {
                continue;
            }
            rowDataCells[1].push(dataCell[i])
            continue;
        }
        rowDataCells[0].push(dataCell[i]);
    }

    collumnDatacells = rowDataCells[player]

    for (var i = (game * 3) - 3 + player * 9; i < innerdataCell.length; i++) {
        if (innerdatacells.length >= 3) {
            continue;
        }
        innerdatacells.push(innerdataCell[i]);
    }
}

function countAllDices(values) {
    let Totalscore = 0;
    for (var i = 0; i < values.length; i++) {
        Totalscore += values[i];
    }
    return Totalscore;
}

function isFullHouse(values) {
    // Controleer of er een set van drie en een set van twee dobbelsteengetallen zijn

    return values.includes(3) && values.includes(2);
}

function isSmallStaight(values) {
    if (
        values.includes(1) && values.includes(2) && values.includes(3) && values.includes(4) ||
        values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5) ||
        values.includes(3) && values.includes(4) && values.includes(5) && values.includes(6)
    ) {
        return true;
    }
    return false;
}

function isLargeStraight(values) {
    if (
        values.includes(1) && values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5) ||
        values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5) && values.includes(6)
    ) {
        return true;
    }
    return false;
}

function isYahtzee(values) {
    return values.length == 1;
}

function isThreeOfAKind(values) {
    return values.includes(3) || values.includes(4) || values.includes(5) || values.includes(6);
}

function isFourOfAKind(values) {
    return values.includes(4) || values.includes(5) || values.includes(6);
}

function countTotalScores() {
    //total score
    var score = 0;
    for (var i = 0; i < 6; i++) {
        if (scoreArr[i] != undefined || scoreArr[i] == 0 ){
            score += Number(scoreArr[i]);
        }
    }
    if(score != 0){
    collumnDatacells[6].innerHTML = score;
    scoreArr[6] = score;
    }
    // Bonus 63 of hoger
    if (score > 63) {
        collumnDatacells[7].innerHTML = 35;
        scoreArr[7] = 35;
    }

    if (!Array.from(scoreArr.slice(0, 6)).includes(undefined)) {
        var scoreboven = Number(scoreArr[6])
        if(scoreArr[7] != undefined){
            scoreboven += Number(scoreArr[7]);
        }
        collumnDatacells[8].innerHTML = scoreboven;
        collumnDatacells[17].innerHTML = scoreboven;
    } 
    
    if (!Array.from(scoreArr.slice(9, 16)).includes(undefined)) {
        var scoreonder = 0;
        for (var i = 9; i < 17; i++) {
            if(scoreArr[i] != undefined){
            scoreonder += Number(scoreArr[i]);
            }
        }
        if(scoreonder != 0){
          collumnDatacells[18].innerHTML = scoreonder;
        }
    }
    
    if (collumnDatacells[17].innerHTML != "" && collumnDatacells[18].innerHTML != "") {
        collumnDatacells[19].innerHTML = Number(collumnDatacells[17].innerHTML) + Number(collumnDatacells[18].innerHTML);
        
    }
}

function keepScore() {
    toNextRound();
    collumnDatacells.forEach(cell => {
        cell.onclick =  function () {
            if(!Array.from(rowDataCells.slice(1,2).includes(cell))){
                return;
            }
            if (rowDataCells[0][6] == cell ||
                rowDataCells[1][6] == cell ||
                rowDataCells[0][8] == cell ||
                rowDataCells[1][8] == cell ||
                rowDataCells[0][17] == cell ||
                rowDataCells[1][17] == cell ||
                rowDataCells[0][18] == cell ||
                rowDataCells[1][18] == cell ||
                rowDataCells[0][19] == cell ||
                rowDataCells[1][19] == cell) {
                return;
            }
            for (var i = 0; i < collumnDatacells.length; i++) {
                 if (collumnDatacells[i] === cell &&
                    scoreArr[i] != undefined ||
                    cell.innerHTML == ""
                ) {
                    return;
                }
            }
            if(!collumnDatacells.includes(cell)){
                return;
            }
                counter = 0;
                dotsSpan.innerHTML = " &#x25CB; &#x25CB; &#x25CB;"
                dobbelstenen.forEach(dobbelsteen => {
                    dobbelsteen.classList.remove("highlighted");
                    dobbelsteen.style.removeProperty("outline");
                });
            

            for (var i = 0; i < collumnDatacells.length; i++) {
                if (collumnDatacells[i] == cell) {
                    scoreArr[i] = cell.innerHTML;
                    collumnDatacells[i].style.fontWeight = "bold";
                    collumnDatacells[i].style.fontSize = "18px";
                }
                if (scoreArr[i] == undefined) {
                    collumnDatacells[i].innerHTML = "";
                }
            }
            
            countTotalScores();
            selectDatacells();
        }
    });
}

function toNextRound(){
    if(rowDataCells[0][19].innerHTML != "" && rowDataCells[1][19].innerHTML != ""){

        game++
        rowDataCells = [[],[]]
        scoreArr = []
        scoreArraysPlayers = [[],[]]
        collumnDatacells = []
        player = 1;
        selectDatacells();
        
    }
}
