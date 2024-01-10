const dataCell = document.querySelectorAll(".scorecell");



function CountDices() {
    const counts = {}; // we maken een leeg object

    // Tel het aantal keer dat elk dobbelsteengetal voorkomt
    for (let i = 0; i < dobbelsteenGetallen.length; i++) {
        const die = dobbelsteenGetallen[i];
        counts[die] = (counts[die] || 0) + 1;
    }
    const values = Object.values(counts);

    console.log("is vol huis =   " + isFullHouse(values));
    console.log("isSmallStraight =   " + isSmallStaight(values))
    console.log("isLargeStraight =   " + isLargeStraight(values))
    console.log("Yahtzee =   " + isYahtzee(values));
    console.log(counts);
    console.log(values);
}

function isFullHouse(values) {
    // Controleer of er een set van drie en een set van twee dobbelsteengetallen zijn
    return values.includes(3) && values.includes(2);
}

function isSmallStaight(values) {
    return values.length == 4;
}
function isLargeStraight(values) {
    return values.length == 5
}

function isYahtzee(values) {
    return values.length == 1;
}