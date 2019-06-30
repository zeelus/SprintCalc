import Project from "../logic/Project"

import { combineReducers } from 'redux';
import { ADD_AMOUNT } from './GameAction'

function initBalance() {
  return 3000;
}

const initProjects = () => {
  // load projects form repository...
  return [
    new Project("2ce08858-60fe-4a1a-b95b-ad8b32e15303",
      "Test Project 1", 1000, 500, 4),
    new Project("71ca9bcc-fe46-4913-a1cd-6930e2410eaf",
      "Test Project 2", 300, 800, 2)
  ];
  
}

const INITIAL_STATE = {
    balance: initBalance(),
    projects: initProjects()
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

