const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_VALUE = "ROCK";
const GAME_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER_wins";

let gameIsRunning = false;

const getUserChoice = function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid entries, default value ${DEFAULT_VALUE}`);
    return DEFAULT_VALUE;
  } else {
    return selection;
  }
};
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? GAME_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? PLAYER_WINS
    : COMPUTER_WINS;
// if (cChoice === pChoice) {
//   return GAME_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return PLAYER_WINS;
// }else{
//   return COMPUTER_WINS;
// }

// const person = {
//     greet: function greet(){
//         console.log('greetings to you aleays');
//     }
// }
// const greet = person.greet;
startGameBtn.addEventListener("click", () => {
  console.log("Starting game......");
  const playerChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice} and Computer ${computerChoice}`;
  if( winner === GAME_DRAW){
    message = message + ' You had a draw';
  }else if (winner === PLAYER_WINS){
    message = message + ' You Win';
  }else{
    message = message + ' You Lost';
  }
 console.log(message);
 gameIsRunning = false;  
});


const sumUpp = (resultHandler, ...numbers)=>{
  let sum = 0;
  const validatenumber = (number) => {
     return isNaN(number) ? 0 : number;
  }

  for(num of numbers){
    sum += validatenumber(num);
  }
  resultHandler(sum);
}

const showResult = (result) => {
   alert('your result is ' + result);
}

sumUpp(showResult,1,3,2,45,2,5,'uuu');