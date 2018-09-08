import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessCount from './guess-count.js';
import GuessEntry from './guess-entry.js';
import GuessList from './guess-list.js';
import Header from './header.js';
import Results from './results.js';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      feedback: [],
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

restartGame() {
  this.setState({
    guesses: [],
    feedback: 'Make a guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1,

  });
}

makeGuess(input) {
  input = parseInt(input, 10);
  if (isNaN(input)) {
    this.setState({ feedback: 'Please enter a valid number, OK?'}); 
    return;
  }

  const difference = Math.abs (input - this.state.correctAnswer);

  let feedback;
  if (difference >= 50) {feedback = "You\'re Cold As Ice"; } 
  else if (difference >= 30) {feedback = 'You\'re Cold-ish';} 
  else if (difference >= 10) {feedback = 'You\'re Hot-ish';} 
  else if (difference >=1) {feedback = 'You\'re Fire';} 
  else {feedback = "You got it, dude!";}

  this.setState({
    feedback, 
    guesses: [. . . this.state.guesses, guess]
  });

  document.title = feedback ? `${feedback} | Hot or Cold` : `Hot or Cold`;
}

generateAuralUpdate() {
  const { guesses, feedback }

  const pluralize = guesses.length != 1; 

  let gameStatus = `Here's the status of the game right now! ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

 if (guesses.length > 0)  {
  gameStatus += `${pluralize ? 'In order from most to least recent, they are . . . ' ? 'It was . . . '} ${guesses.reverse().join(', ')}`;  
 }

this.setState({ gameStatus });

}

render() {
  const { feedback, guesses, gameStatus } = this.state;
  const GuessCount = guesses.length; 

  return (
    <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateGameUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            gameStatus={gameStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  } 
}