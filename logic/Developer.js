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

  getId() {
    return this.#id;
  }

  getCost() {
    return this.#cost;
  }

  getBackendPower() {
    return this.#backendPower;
  }

  getFrontendPower() {
    return this.#frontendPower;
  }

}
