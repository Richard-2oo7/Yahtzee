const dataCell = document.querySelectorAll(".scorecell");

function telDobbelstenen() {
    isFullHouse(dobbelsteenGetallen);

}

function isFullHouse(dice) {
    const counts = {}; // we maken een leeg object

    // Tel het aantal keer dat elk dobbelsteengetal voorkomt
    for (let i = 0; i < dice.length; i++) {
        const die = dice[i];
        counts[die] = (counts[die] || 0) + 1;
    }
    console.log(counts)

    // Controleer of er een set van drie en een set van twee dobbelsteengetallen zijn
    const values = Object.values(counts);
    return values.includes(3) && values.includes(2);


}
roll1 = [1, 2, 3, 1, 5];
// Voorbeeldgebruik

console.log(isFullHouse(roll1));