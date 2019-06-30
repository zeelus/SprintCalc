export default class Developer {

  #id = "";
  #cost = 0;
  #backendPower = 0;
  #frontendPower = 0;

  constructor(id, cost, backendPower, frontendPower) {
    this.#id = id;
    this.#cost = cost;
    this.#backendPower = backendPower;
    this.#frontendPower = frontendPower;
  }

  get id() {
    return this.#id;
  }

  get cost() {
    return this.#cost;
  }

  get backendPower() {
    return this.#backendPower;
  }

  get frontendPower() {
    return this.#frontendPower;
  }

}
