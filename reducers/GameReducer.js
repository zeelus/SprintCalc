import { combineReducers } from 'redux';
import { ADD_AMOUNT } from './GameAction'

const INITIAL_STATE = {
    balance: 3000
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return {
          ...state,
          balance: state.balance + 100
      };
    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer,
});

