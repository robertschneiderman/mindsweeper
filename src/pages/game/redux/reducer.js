import merge from 'lodash/merge';
import initialState from './initialState';

import { RECEIVE_GAMES,
         RECEIVE_GAME,
         REMOVE_GAME,
         GAME_ERROR
       } from './constants';

const gameReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_GAMES:
      let newState = {};
      action.games.forEach(game => {
        newState[game.id] = game;
      });
      return newState;
    case RECEIVE_GAME:
      const newTemplate = {[action.game.id]: action.game};
      return merge({}, state, newTemplate);
    case REMOVE_GAME:
      newState = merge({}, state);
      delete newState[action.game.id];
      return newState;
    case GAME_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default gameReducer;