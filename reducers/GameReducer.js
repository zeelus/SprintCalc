import Project from "../logic/Project"
import Developer from "../logic/Developer"
import Event from "../logic/Event"
import ImageData from "../logic/ImageData"

import {combineReducers} from 'redux';
import {ADD_AMOUNT} from './GameAction'

function initBalance() {
  return 3000;
}

const initProjects = () => {
  try {
    var projects = [];
    const projectObjects = require('../assets/data/projects.json');
    projectObjects.forEach((item) => {projects.push(Object.assign(new Project(), item))});
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
    developerObjects.forEach((item) => {developers.push(Object.assign(new Developer(), item))});
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
    eventObjects.forEach((item) => {events.push(Object.assign(new Event(), item))});
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
}

const INITIAL_STATE = {
  balance: initBalance(),
  projects: initProjects(),
  developers: initDevelopers(),
  events: initEvents(),
  imageCache: initImageCache()
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

