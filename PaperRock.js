/* Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user's choice.
Get the computer's choice.
Compare the two choices and determine a winner.
Start the program and display the results. */


const getUserChoice = function(userInput){
    userinput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    }else if (userInput === 'paper') {
      return userInput;
    }else if (userInput === 'scissors'){ 
        return userInput;
    } else {
      console.log('Wrong choice');
    }
  }
  
  console.log(getUserChoice('paper'));
  console.log(getUserChoice('fork'));
  
  const randomNumber = Math.floor(Math.random() *3);
  
  const getComputerChoice = function(randomNumber) {
    if (randomNumber === 0) {
      return 'paper';
    }else if (randomNumber === 1) {
      return 'rock';
    }else if (randomNumber === 2){ 
        return 'scissors';
    } else {
      console.log('Wrong choice');
    }
  }
  
  console.log(getComputerChoice(randomNumber));
  
  
  const determineWinner = function(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return 'Tie!'
    }
    if(userChoice === 'rock' && computerChoice === 'paper') {
      return 'Computer Won!'
    }else {
      return 'User Won!'
    }
    if (userChoice == 'paper' && computerChoice === 'scissors)') {
      return 'Computer Won!'
    }else {
      return 'User Won!'
    }
      if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'Computer Won!';
    }else {
      return 'User Won!';
    }
  } 
  
  console.log(determineWinner('rock',randomNumber));
  
  
  const playGame = function(userChoice, computerChoice) {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice(randomNumber);
    determineWinner(userChoice,computerChoice)
  }
  
  console.log(determineWinner(playGame));
  
  
  
  