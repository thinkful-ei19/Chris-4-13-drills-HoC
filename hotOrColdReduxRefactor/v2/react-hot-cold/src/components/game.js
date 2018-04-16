import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import store from '../store'

import {inputNumber, updateDom, restartGame} from '../actions/actions'

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState()
    console.log(this.state);
  }

  restartGame() {
    store.dispatch(restartGame())
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

const mapStateToProps = (state) => ({
    numbers: state.numbers
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ inputNumber, updateDom, restartGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);