export default class Developer {
  #index = 0;
  _id = "";
  name = "";
  lastName = "";
  cost = 0;
  backendPower = 0;
  frontendPower = 0;
  image = "";

  constructor(index, id, name, lastName, cost, backendPower, frontendPower, image) {
    this.#index = index;
    this._id = id;
    this.name = name;
    this.lastName = lastName;
    this.cost = cost;
    this.backendPower = backendPower;
    this.frontendPower = frontendPower;
    this.image = image;
  }

  getIndex() {
    return this.#index;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this.name;
  }

  getLastName() {
    return this.lastName;
  }

  getCost() {
    return this.cost;
  }

  getBackendPower() {
    return this.backendPower;
  }

  getFrontendPower() {
    return this.frontendPower;
  }

  getImage() {
    return this.image;
  }
}
