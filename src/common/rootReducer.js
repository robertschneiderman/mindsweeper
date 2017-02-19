import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gameReducer from '../pages/game/redux/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  game: gameReducer,
});

export default rootReducer;
