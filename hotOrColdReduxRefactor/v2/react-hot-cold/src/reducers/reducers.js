import { INPUT_NUMBER, RESTART_GAME, UPDATE_DOM } from '../actions/actions'

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const mainReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case INPUT_NUMBER:
            const guess = parseInt(action.payload.number, 10);
            if (isNaN(guess)) {
            this.setState({ feedback: 'Please enter a valid number' });
            return;
            }
        
            const difference = Math.abs(guess - state.correctAnswer);
        
            let feedback;
            if (difference >= 50) {
                feedback = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
                feedback = 'You\'re Cold...';
            } else if (difference >= 10) {
                feedback = 'You\'re Warm.';
            } else if (difference >= 1) {
                feedback = 'You\'re Hot!';
            } else {
                feedback = 'You got it!';
            }

            //document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';

            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, guess]
                })

        case RESTART_GAME:
            return {
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: Math.round(Math.random() * 100) + 1
            }

        case UPDATE_DOM:
            console.log('updateDom running')
            const { guesses } = state;

            // If there's not exactly 1 guess, we want to
            // pluralize the nouns in this aural update.
            const pluralize = guesses.length !== 1;
        
            let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
        
            if (guesses.length > 0) {
            auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
            }

            return Object.assign({}, state, {auralStatus});
    }
}