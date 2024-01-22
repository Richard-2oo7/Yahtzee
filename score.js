const dataCell = document.querySelectorAll(".scorecell");
const innerdataCell = document.querySelectorAll(".innerdata");

var collumnDatacells = [];
var innerdatacells = [];
var scoreArr = [];
var game = 1;
var index = 0;
var scoreTabelsArray = [];
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
    collumnDatacells = [];
    innerdatacells = [];
    for (var i = game - 1; i < dataCell.length; i += 3) {
        collumnDatacells.push(dataCell[i]);
    }

    for (var i = (game * 3) - 3; i < innerdataCell.length; i++) {
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
        if (scoreArr[i] != undefined) {
            score += Number(scoreArr[i]);
        }
    }
    collumnDatacells[6].innerHTML = score;
    scoreArr[6] = score;

    // Bonus 63 of hoger
    if (score > 1) {
        collumnDatacells[7].innerHTML = 35;
        scoreArr[7] = 35;
    }

    if (!Array.from(scoreArr.slice(0, 6)).includes(undefined)) {
        var scoreboven = scoreArr[6] + scoreArr[7];
        collumnDatacells[8].innerHTML = scoreboven;
        collumnDatacells[17].innerHTML = scoreboven;
    }
    if (!Array.from(scoreArr.slice(9, 15)).includes(undefined)) {
        var scoreonder = 0;
        for (var i = 9; i < 17; i++) {
            if (scoreArr[i] == undefined) {
                scoreArr[i] = 0;
            }
            scoreonder += Number(scoreArr[i]);
        }
        //   collumnDatacells[18].innerHTML = scoreonder;
    }
    if (!Array.from(scoreArr.slice(17, 18)).includes(undefined)) {
        collumnDatacells[19].innerHTML = Number(collumnDatacells[17].innerHTML) + Number(collumnDatacells[18].innerHTML);
    }

}

function keepScore() {
    collumnDatacells.forEach(cell => {
        cell.addEventListener("click", function () {
            if (collumnDatacells[6] == cell ||
                collumnDatacells[8] == cell ||
                collumnDatacells[17] == cell ||
                collumnDatacells[18] == cell ||
                collumnDatacells[19] == cell) {
                return;
            }
            for (var i = 0; i < collumnDatacells.length; i++) {
                if (collumnDatacells[i] == cell &&
                    scoreArr[i] != undefined ||
                    cell.innerHTML == ""
                ) {
                    return;
                }
            }

            for (var i = 0; i < collumnDatacells.length; i++) {
                if (collumnDatacells[i] == cell) {
                    scoreArr[i] = cell.innerHTML;
                    collumnDatacells[i].style.fontWeight = "bold";
                }
                if (scoreArr[i] === undefined) {
                    collumnDatacells[i].innerHTML = "";
                }
            }
            countTotalScores()
        })
    });
}

