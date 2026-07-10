$("#game").submit(function (e) {
    e.preventDefault();
});
function play(cars1, cars2) {
    let result = document.getElementById("text");
    let player1 = document.getElementById('cars1');
    let PLAYER1 = player1.value;
    let player2 = document.getElementById('cars2');
    let PLAYER2 = player2.value;
    let playeronename = document.getElementById('playeronename')
    let name1 = playeronename.value;
    let playertwoname = document.getElementById('playertwoname')
    let name2 = playertwoname.value;
    if (PLAYER1 === PLAYER2) {
          result.textContent = "Draw!!!"
        }else if (PLAYER1 === "Paper") {
            if (PLAYER2 === "Rock") {
                result.textContent = `${name1} wins!!!(Paper covers Rock)`;
            }else if(PLAYER2 === "Scissors") {
                  result.textContent = `${name2} wins!!!(Rock crushes Scissors)`;              
            }else  result.textContent ="Draw!!!";
        }else if(PLAYER1 === "Rock") {
            if (PLAYER2 === "Scissors") {
                result.textContent = `${name1} wins!!!(Rock crushes Scissors)`;
            }else if(PLAYER2 === "Paper") {
                  result.textContent = `${name2} wins!!!(Paper covers Rock)`;              
            }else  result.textContent ="Draw!!!";
        }else{         
            if (PLAYER2 === "Paper") {
                result.textContent = `${name1} wins!!!(Scissors cuts paper)`;
            }else if(PLAYER2 === "Rock") {
                  result.textContent = `${name2} wins!!!(Rock crushes Scissors)`;              
            }else  result.textContent ="Draw!!!";
        } 
    }