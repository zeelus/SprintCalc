/* Action types: */
export const ADD_BALANCE = 'ADD_BALANCE';
export const SUBTRACT_BALANCE = 'SUBTRACT_BALANCE';
export const ADD_DEVELOPER = 'ADD_DEVELOPER';
export const REMOVE_DEVELOPER = 'REMOVE_DEVELOPER';
export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const PROGRESS_PROJECT = 'PROGRESS_PROJECT';
export const INCREMENT_ROUND = 'INCREMENT_ROUND';

/* Action handlers: */
export function addBalance(balance) {
  return {
    type: ADD_BALANCE,
    balance
  }
}

export function subtractBalance(balance) {
  return {
    type: SUBTRACT_BALANCE,
    balance
  }
}

export function incrementRound() {
  return {
    type: INCREMENT_ROUND
  }
}

export function addDeveloper(developer) {
  return {
    type: ADD_DEVELOPER,
    developer
  }
}

export function removeDeveloper(developer) {
  return {
    type: REMOVE_DEVELOPER,
    developer
  }
}

export function addProject(project) {
  return {
    type: ADD_PROJECT,
    project
  }
}

export function removeProject(project) {
  return {
    type: REMOVE_PROJECT,
    project
  }
}

export function progressProject(project, backend, frontend) {
  return {
    type: PROGRESS_PROJECT,
    project, backend, frontend
  }
}
