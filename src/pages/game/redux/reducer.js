import merge from 'lodash/merge';
import initialState from './initialState';

import {
         SET_DIFFICULTY,
         START_GAME,
         ATTACK_SPACE,
       } from './actions';

const gameReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case SET_DIFFICULTY:
      newState.payload = action.payload;
      return newState;
    case START_GAME:
      newState.bombs = action.payload.bombs;
      newState.boardSize = action.payload.boardSize;
      newState.grid = action.payload.grid;
      newState.phase = 'playing';
      return newState;
    case ATTACK_SPACE:
      newState.grid[action.payload.y][action.payload.x].revealed = true;
      return newState;
    default:
      return state;
  }
};

export default gameReducer;