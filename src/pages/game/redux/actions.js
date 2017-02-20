export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const START_GAME = 'START_GAME';
export const ATTACK_SPACE = 'ATTACK_SPACE';

export const setDifficulty = payload => ({
  type: SET_DIFFICULTY,
  payload
});

export const startGame = payload => ({
  type: START_GAME,
  payload
});

export const attackSpace = payload => ({
  type: ATTACK_SPACE,
  payload
});


