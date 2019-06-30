export class Outcome {

  #moneyInfluence = 0;
  #timeInfluence = 0;

  constructor(moneyInfluence, timeInfluence) {
    this.#moneyInfluence = moneyInfluence;
    this.#timeInfluence = timeInfluence;
  }

  get moneyInfluence() {
    return this.#moneyInfluence;
  }

  get timeInfluence() {
    return this.#timeInfluence;
  }

}

export default class Event {

  #id = "";
  name = "";
  #outcome;

  constructor(id, name, outcome) {
    this.#id = id;
    this.name = name;
    this.#outcome = outcome;
  }

  get id() {
    return this.#id;
  }

  get outcome() {
    return this.#outcome;
  }

  get name() {
    return this.name;
  }

}
