const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
      return userInput;
    } else {
      console.log('invalid choice!')
    }
  };
  
  const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'rock'
    } else if (random === 1){
      return 'paper'
    } else {
      return 'scissors'
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'it is a tie'
    };
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'the computer won'
      } else {
        return 'you won'
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'you won'
      } else {
        return 'the computer won'
      }
    }
  
      if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'the computer won'
      } else {
        return 'you won'
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log(`${userChoice}`);
    console.log(`${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
  