const dataCell = document.querySelectorAll(".scorecell");
const innerdataCell = document.querySelectorAll(".innerdata");

var collumnDatacells = [];
var innerdatacells = [];
var scoreArr = [];
var game = 1;
selectDatacells(); // selecteert de eerste row van game
    
function viewScore() { 
    keepScore();
    const counts = {};
    //maakt een object en array met hoevaak iets voorkomt---------
        for (let i = 0; i < dobbelsteenGetallen.length; i++) {
        const die = dobbelsteenGetallen[i];
        counts[die] = (counts[die] || 0) + 1;
    }
    const values = Object.values(counts);
    //------------------------------------------------------------

    //------------------------------------------------------------
    for(var i = 0; i < collumnDatacells.length; i++){
        if(i < 7){
        if(counts[i] == undefined){
            collumnDatacells[i].innerHTML = "";
            continue;
        }

        if(scoreArr[i -1] === undefined){
            collumnDatacells[i].innerHTML = "";
            collumnDatacells[i -1].innerHTML = counts[i] * i;
        } else{
            collumnDatacells[i -1].innerHTML = scoreArr[i - 1];
        }
    } else{
        if(scoreArr[i -1] === undefined){
            collumnDatacells[i -1].innerHTML = "";
        } else{
        collumnDatacells[i -1].innerHTML = scoreArr[i - 1];
        }
    }
} if(scoreArr[9] == undefined){
    if(isThreeOfAKind(values)){
        collumnDatacells[9].innerHTML = countAllDices(dobbelsteenGetallen);
    } else{
        collumnDatacells[9].innerHTML = "";
    }
}
if(scoreArr[10] == undefined){
    if(isFourOfAKind(values)){
        collumnDatacells[10].innerHTML = countAllDices(dobbelsteenGetallen);
    } else{
        collumnDatacells[10].innerHTML = "";
    }
}
if(scoreArr[11] == undefined){
    if(isFullHouse(values)){
        collumnDatacells[11].innerHTML = 25;
    } else{
        collumnDatacells[11].innerHTML = "";
    }
}
if(scoreArr[12] == undefined){
    if(isSmallStaight(dobbelsteenGetallen)){
        collumnDatacells[12].innerHTML = 30;
    } else{
        collumnDatacells[12].innerHTML = "";
    }
}
if(scoreArr[13] == undefined){
    if(isLargeStraight(dobbelsteenGetallen)){
        collumnDatacells[13].innerHTML = 40;
    } else{
        collumnDatacells[13].innerHTML = "";
    }
}
if(scoreArr[14] == undefined){
    if(isYahtzee(values)){
        collumnDatacells[14].innerHTML = 50;
    } else{
        collumnDatacells[14].innerHTML = "";
    }
}
// is kans
if(scoreArr[15] == undefined){
        collumnDatacells[15].innerHTML = countAllDices(dobbelsteenGetallen);
    }
}
  

    /*
    console.log("isThreeOfAKind =      " + isThreeOfAKind(values));
    console.log("isfourOfAKind =    " + isFourOfAKind(values));
    console.log("is vol huis =   " + isFullHouse(values));
    console.log("isSmallStraight =   " + isSmallStaight(dobbelsteenGetallen));
    console.log("isLargeStraight =   " + isLargeStraight(dobbelsteenGetallen));
    console.log("Yahtzee =   " + isYahtzee(values));
    console.log(counts);
    console.log(values);
    console.log(countAllDices(dobbelsteenGetallen));
    */


    // we tellen het aantal keer dat elk dobbelsteengetal voorkomt in de dice array



function selectDatacells(){
    collumnDatacells = [];
    innerdatacells = [];
    for(var i = game - 1; i < dataCell.length; i += 3){
        collumnDatacells.push(dataCell[i]);
    }

    for(var i = (game * 3) -3; i < innerdataCell.length; i++){
        if(innerdatacells.length >= 3){
            continue;
        }
        innerdatacells.push(innerdataCell[i]); 
    } 
}

function countAllDices(values){
    let Totalscore = 0;
    for(var i = 0; i < values.length; i++){
        Totalscore += values[i];
    }
    return Totalscore;
}

function isFullHouse(values) {
    // Controleer of er een set van drie en een set van twee dobbelsteengetallen zijn

    return values.includes(3) && values.includes(2);
}

function isSmallStaight(values) {
    if(
           values.includes(1) && values.includes(2) && values.includes(3) && values.includes(4) ||
           values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5) ||
           values.includes(3) && values.includes(4) && values.includes(5) && values.includes(6)
    ){
        return true;
    }
    return false;
}

function isLargeStraight(values) {
    if(
        values.includes(1) && values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5)||
        values.includes(2)  && values.includes(3) && values.includes(4) && values.includes(5) && values.includes(6)
 ){
     return true;
 }
 return false;
}

function isYahtzee(values) {
    return values.length == 1;
}

function isThreeOfAKind(values){
return values.includes(3) || values.includes(4) || values.includes(5) || values.includes(6);
}

function isFourOfAKind(values){
    return values.includes(4) || values.includes(5) || values.includes(6);
}

function keepScore(){
    /*
    var cijfer;
    var scoreArr = [];
    collumnDatacells.forEach(cell => {
     //   cell.innerHTML = "";
            cell.addEventListener("click", function(){
                cijfer = cell.innerHTML;

                if(cell.innerHTML == ""){ // hierdoor kan je niet op een lege cell klikken
                    return;
                }

                for(var i = 0; i < collumnDatacells.length; i++){
                    if(collumnDatacells[i] === cell){                scoreArr[i] = cell.innerHTML;
                        console.log(scoreArr);
                        continue;
                    }

                   if(scoreArr[i] == cell.innerHTML){
                    cell.innerHTML = scoreArr[i];
                    continue;
                   } 
                   
                   collumnDatacells[i].innerHTML = "";
                }
            })
    });

/*
    var scoreArr = [];
    collumnDatacells.forEach(cell => {
            cell.addEventListener("click", function(){
                if(cell.innerHTML == ""){ 
                    return;
                } 
                firstClick = true;
                for(var i = 0; i < collumnDatacells.length; i++){

                    if(collumnDatacells[i] === cell){                scoreArr[i] = cell.innerHTML;
                    }
                }
                
                
            })

            for(var i = 0; i < collumnDatacells.length; i++){
                collumnDatacells[i].innerHTML = scoreArr[i];
            
        }
    });
    */
   
    collumnDatacells.forEach(cell => {
            cell.addEventListener("click", function(){
                for(var i = 0; i < collumnDatacells.length; i++){
    	            if(collumnDatacells[i] == cell &&
                        scoreArr[i] != undefined ||
                        cell.innerHTML == ""){
                        return;
                    }
                }
                
                for(var i = 0; i < collumnDatacells.length; i++){
                    if(collumnDatacells[i] == cell){
                        scoreArr[i] = cell.innerHTML;
                        collumnDatacells[i].style.fontWeight = "bold";
                    }
                    if(scoreArr[i] === undefined){
                        collumnDatacells[i].innerHTML = "";
                    }
                }
            })
    });
}

