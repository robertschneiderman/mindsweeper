import merge from 'lodash/merge';
import initialState from './initialState';

import {
         SET_DIFFICULTY,
         START_GAME,
         ATTACK_SPACE,
         END_GAME,
         NEW_GAME,
       } from './actions';

const getAdjacents = (boardSize, y, x) => {
    let adjacents = [];
    for (let a = -1; a <= 1; a++) {
        for (let b = -1; b <= 1; b++) {
            if (a === 0 && b === 0 ) continue;
            let coordX = x + a;
            let coordY = y + b;
            if (coordX < 0 || coordX >= boardSize) continue;
            if (coordY < 0 || coordY >= boardSize) continue;
            adjacents.push([coordY, coordX]);
        }
    }
    return adjacents;
};

const getSpace = (grid, y, x) => {
  return grid[y][x];
};

const inQueue = (queue, y, x) => {
  let finds = queue.filter(coord => coord[0] === y && coord[1] === x);
  return finds > 0;
};

const getAttackedSpaces = (grid, boardSize, y, x) => {
  // debugger;

  let queue = [[y, x]];

  while (queue.length > 0) {
    // debugger;
    let coord = queue[0];
    let space = grid[coord[0]][coord[1]];
    space.revealed = true;
    let adjacents = getAdjacents(boardSize, coord[0], coord[1]);
    queue.shift();

    adjacents.forEach(adjacent => {
      let adjSpace = grid[adjacent[0]][adjacent[1]];
      // debugger;
      if (adjSpace.value !== 'bomb' &&
          !adjSpace.revealed && !inQueue(queue, adjacent[0], adjacent[1])
          && adjSpace.adjacentBombs === 0) {
          queue.push([adjacent[0], adjacent[1]]);
      }
    });

  }
};       

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
      getAttackedSpaces(newState.grid, newState.boardSize, action.payload.y, action.payload.x);
      // newState.grid[action.payload.y][action.payload.x].revealed = true;
      return newState;
    case END_GAME:
      newState.phase = 'over';    
      return newState;
    case NEW_GAME:
      newState.phase = 'setup';
      return newState;
    default:
      return state;
  }
};

export default gameReducer;