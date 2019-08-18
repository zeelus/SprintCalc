import Project from "../logic/Project"
import Developer from "../logic/Developer"
import Event from "../logic/Event"
import ImageData from "../logic/ImageData"

import {combineReducers} from 'redux';
import {
  INCREMENT_ROUND,
  ADD_BALANCE,
  SUBTRACT_BALANCE,
  ADD_DEVELOPER,
  ADD_PROJECT,
  REMOVE_DEVELOPER,
  REMOVE_PROJECT,
  PROGRESS_PROJECT
} from './GameAction'

/* Global Store */

const initProjects = () => {
  try {
    var projects = [];
    const projectObjects = require('../assets/data/projects.json');
    projectObjects
      .forEach((item) => {projects.push(Object.assign(new Project(), item))});
    console.log(projects);
    return projects;
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

const initDevelopers = () => {
  try {
    var developers = [];
    const developerObjects = require('../assets/data/developers.json');
    developerObjects
      .forEach((item) => {developers.push(Object.assign(new Developer(), item))});
    console.log(developers);
    return developers;
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

const initEvents = () => {
  try {
    var events = [];
    const eventObjects = require('../assets/data/events.json');
    eventObjects
      .forEach((item) => {events.push(Object.assign(new Event(), item))});
    console.log(events);
    return events;
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

const initImageCache = () => {
  try {
    var images = new Map();
    const imageObjects = require('../assets/data/image-cache.json');
    imageObjects.forEach((item) => {
      const imageData = Object.assign(new ImageData(), item);
      images[imageData.getKey()] = imageData.getValue();
    });
    return images;
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

const INIT_GLOBAL_STORE = {
  projects: initProjects(),
  developers: initDevelopers(),
  events: initEvents(),
  imageCache: initImageCache()
};

const gameReducer = (state = INIT_GLOBAL_STORE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* Player's Store */

const initPlayerBalance = () => {
  return 500000;
};

const initMaxLoad = () => {
  return -100000;
};

const INITIAL_STATE = {
  balance: initPlayerBalance(),
  maxLoan: initMaxLoad(),
  round: 1,
  projects: [],
  developers: [],
  projectState: new Map() //map: {uuid: value}
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_ROUND:
      return {
        ...state,
        round: state.round + 1
      };
    case ADD_DEVELOPER:
      return {
        ...state,
        developers: [...state.developers, action.developer]
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project],
        projectState: {
          ...state.projectState,
          [action.project.getId()]: 1
        }
      };
    case REMOVE_PROJECT:
      const newProjectStates = {...state.projectState};
      delete newProjectStates[action.project.getId()];
      return {
        ...state,
        projects: [...state.projects.filter((e) => e.getId() !== action.project.getId())],
        projectState: {...newProjectStates}
      };
    case REMOVE_DEVELOPER:
      return {
        ...state,
        developers: [...state.developers.filter((e) => e.getId() !== action.developer.getId())]
      };
    case PROGRESS_PROJECT:
      let newProjects = [...state.projects];
      newProjects.forEach((e) => {
          if (e.getId() === action.project.getId()) {
            e.setBackendProgress(action.backend);
            e.setFrontendProgress(action.frontend);
          }
        });
      return {
        ...state,
        projects: [...newProjects],
        projectState: {
          ...state.projectState,
          [action.project.getId()]: state.projectState[action.project.getId()] + 1
        }
      };
    case ADD_BALANCE:
      return {
        ...state,
        balance: state.balance + action.balance
      };
    case SUBTRACT_BALANCE:
      return {
        ...state,
        balance: state.balance - action.balance
      };
    default:
      return state;
  }
};

/* Store Register */

export default combineReducers({
  game: gameReducer,
  player: playerReducer
});

