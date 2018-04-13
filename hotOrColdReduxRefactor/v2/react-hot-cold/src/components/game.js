import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {inputNumber, updateDom} from '../actions/actions'

import store from '../store'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    store.dispatch(inputNumber(guess))
  }

  generateAuralUpdate() {
    store.dispatch(updateDom())
  }

  render() {
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}
