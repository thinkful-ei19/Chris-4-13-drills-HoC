export const INPUT_NUMBER = 'INPUT_NUMBER';
export const RESTART_GAME = 'RESTART_GAME';
export const UPDATE_DOM = 'UPDATE_DOM';

export function inputNumber(number) {
    return {
        type: INPUT_NUMBER,
        payload: {number}
    }
}

export function restartGame() {
    return {
        type: RESTART_GAME,
        payload: null
    }
}

export function updateDom() {
    return {
        type: UPDATE_DOM,
        payload: null
    }
}