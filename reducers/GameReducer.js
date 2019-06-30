import Project from "../logic/Project"
import Developer from "../logic/Developer"
import Event, { Outcome } from "../logic/Event"

import {combineReducers} from 'redux';
import {ADD_AMOUNT} from './GameAction'

function initBalance() {
  return 3000;
}

const initDevelopers = () => {
  // todo: load developers form repository...
  return [
    new Developer("6006eb6a-9a4b-48c2-9b17-7ab297b2aae8",
      "John", "Appleseed", 300, 150, 350),
    new Developer("c1bd52d3-3eb4-4abd-b600-492c8db8b92c",
      "Nataly", "Random", 400, 600, 50)
  ];
};

const initProjects = () => {
  // todo: load projects form repository...
  return [
    new Project("2ce08858-60fe-4a1a-b95b-ad8b32e15303",
      "Test Project 1", 1000, 500, 4),
    new Project("71ca9bcc-fe46-4913-a1cd-6930e2410eaf",
      "Test Project 2", 300, 800, 2)
  ];
};

const initEvents = () => {
  // todo: load events from repository...
  return [
    new Event("5103ced6-e5b2-4f70-aa98-d23affb9d494",
      "Test Event 1", new Outcome(
        1000, 1
      )),
    new Event("81c882ee-d7d1-401b-9d48-f1fc1416fbbf",
      "Test Event 2", new Outcome(
        -1000, 1
      ))
  ];
};

const INITIAL_STATE = {
  balance: initBalance(),
  projects: initProjects(),
  developers: initDevelopers(),
  events: initEvents()
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return {
        ...state,
        balance: state.balance + action.balance
      };
    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer,
});

