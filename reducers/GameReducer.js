import { combineReducers } from 'redux';
import { ADD_AMOUND } from './GameAction'

const INITIAL_STATE = {
    amound: 3000
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ADD_AMOUND:
          const newState = { amound: state.amound + 100 }
          return newState
    default:
      return state
  }
};

export default combineReducers({
  game: gameReducer,
});

