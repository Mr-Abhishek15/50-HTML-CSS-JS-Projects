const buttons =document.querySelectorAll("button");

const resultE1 = document.getElementById("result");


buttons.forEach((button) => {
    button.addEventListener("click",() => {
       const result = playRound(button.id, computerPlay());
       resultE1.textContent=result;
    });
});

function computerPlay(){
    const choices =["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()* choices.length);
    return choices[randomChoice];

}

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) { 
        return "It's a tie!";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "you win!" + playerSelection + "beats" + computerSelection;
    } else{
        return "you lose!" + computerSelection + "beats" + playerSelection;
    }
    }
