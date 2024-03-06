let body = document.querySelector("body");
let buttons = document.querySelectorAll(".btnOX");
let turnInfo = document.querySelector("#heading");
let winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn = 0;
let playerMarking = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let boardFull = 0;
let winningTag = document.getElementById("winTag");





console.log(buttons);
// 0 for player 1
// 1 for player 2
const checkSomeBodyWins = (turn, winningPattern, playerMarking) => {
    for (let i = 0; i < winningPattern.length; i++) {
        let flag = true;
        for (let j = 0; j < winningPattern[i].length; j++) {
            if (playerMarking[winningPattern[i][j]] !== turn) {
                flag = false;
                break; 
            }
        }
        if (flag) return true; 
    }
    return false; 
}

for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener("click", (evt)=>{
        if(turn == 0)
        {
            buttons[i].innerHTML ="O";
            buttons[i].disabled = "true";
            turnInfo.innerHTML = "<center><h4>Player 2's Turn</h4></center>";
            boardFull++;
            playerMarking[i] = turn;
            console.log(turn);
            console.log(playerMarking);
            if(checkSomeBodyWins(turn,winningPattern,playerMarking))
            {
                winningTag.innerText = "Game Over ! Player 1's Wins the Game.";
                
                for(let i=0; i<buttons.length; i++)
                {
                    buttons[i].disabled = true;
                }
            }
            else if(boardFull == 9)
            {
                winningTag.innerText = "Both Played Well ! Game Tied"; 
            }
            else
            {
                turn = 1;
            }

        }
        else if(turn == 1)
        {
            buttons[i].innerText = "X";
            buttons[i].disabled = "true";
            turnInfo.innerHTML = "<center><h4>Player 1's Turn</h4></center>";
            boardFull++;
            playerMarking[i] = turn;
            console.log(turn);
            console.log(playerMarking);
            if(checkSomeBodyWins(turn,winningPattern,playerMarking))
            {
                winningTag.innerText = "Game Over ! Player 2's Wins the Game.";
                
                for(let i=0; i<buttons.length; i++)
                {
                    buttons[i].disabled = true;
                }
            }
            else if(boardFull == 9)
            {
                winningTag.innerText = "Both Played Well ! Game Tied";
               
            }
            else
            {
                turn = 0;
            }
        }
        else
        {}
    
    });
}
