// write a code playRPS(player1, player2) that returns the winner based on these rules.
// Rock beats scissors
// Scissors beat paper
// Paper beats rock
// Same choice = tie
// Return "Player 1 wins", "Player 2 wins", or "Its a tie"

function playRPS(player1, player2){
    switch (true){
        case
        (player1 == "rock" && player2 == "scissors") ||
        (player1 == "scissors" && player2 == "paper") ||
        (player1 == "paper" && player2 =="rock"):
            return "Player 1 wins";
            break
        case
        (player2 == "rock" && player1 == "scissors") ||
        (player2 == "scissors" && player1 == "paper") ||
        (player2 == "paper" && player1 =="rock"):
            return "Player 2 wins";
            break
        default:
            return "Its a tie"
            break
    } 
}
console.log(playRPS("rock", "scissors"));
console.log(playRPS("paper", "rock"));
console.log(playRPS("scissors", "rock"));
console.log(playRPS("rock", "rock"));



