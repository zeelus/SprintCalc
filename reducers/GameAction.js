/* Action types: */
export const ADD_BALANCE = 'ADD_BALANCE';
export const SUBTRACT_BALANCE = 'SUBTRACT_BALANCE';
export const ADD_DEVELOPER = '';
export const REMOVE_DEVELOPER = '';
export const ADD_PROJECT = '';
export const REMOVE_PROJECT = '';
export const ADD_EVENT = '';

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
