export default class Developer {

  #id = "";
  #name = "";
  #lastname = "";
  #cost = 0;
  #backendPower = 0;
  #frontendPower = 0;

  constructor(id, name, lastname, cost, backendPower, frontendPower) {
    this.#id = id;
    this.#name = name;
    this.#lastname = lastname;
    this.#cost = cost;
    this.#backendPower = backendPower;
    this.#frontendPower = frontendPower;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getLastname() {
    return this.#lastname;
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
