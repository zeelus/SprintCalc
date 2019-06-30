export const ADD_AMOUNT = 'ADD_AMOUNT';

export function addAmount(balance) {
  return {
    type: ADD_AMOUNT,
    balance
  }
}
