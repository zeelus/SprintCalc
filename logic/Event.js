export class Outcome {

  #moneyInfluence = 0;
  #timeInfluence = 0;

  constructor(moneyInfluence, timeInfluence) {
    this.#moneyInfluence = moneyInfluence;
    this.#timeInfluence = timeInfluence;
  }

  getMoneyInfluence() {
    return this.#moneyInfluence;
  }

  getTimeInfluence() {
    return this.#timeInfluence;
  }

}

export default class Event {

  #id = "";
  #name = "";
  #outcome;

  constructor(id, name, outcome) {
    this.#id = id;
    this.#name = name;
    this.#outcome = outcome;
  }

  getId() {
    return this.#id;
  }

  getOutcome() {
    return this.#outcome;
  }

  getName() {
    return this.#name;
  }

}
