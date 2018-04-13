export const SUBMIT_NUMBER = 'SUBMIT_NUMBER'

export function inputNumber(number) {
    return {
        type: SUBMIT_NUMBER,
        payload: {number}
    }
}

export const RESTART_GAME = 'RESTART_GAME'

export function restartGame() {
    return {
        type: RESTART_GAME,
        payload: null
    }
}

export const UPDATE_STATUS = 'UPDATE_STATUS'

export function updateList(input) {
    return {
        type: UPDATE_STATUS,
        payload: input
    }
}