export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const START_GAME = 'START_GAME';
export const ATTACK_SPACE = 'ATTACK_SPACE';
export const END_GAME = 'END_GAME';
export const NEW_GAME = 'NEW_GAME';
export const FLAG_SPACE = 'FLAG_SPACE';

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

export const endGame = payload => ({
  type: END_GAME,
  payload
});

export const newGame = payload => ({
  type: NEW_GAME,
  payload
});

export const flagSpace = payload => ({
  type: FLAG_SPACE,
  payload
});


