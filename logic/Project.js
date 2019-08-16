export default class Project {
  #index = 0;
  _id = "";
  name = "";
  backendPowerRequired = 0;
  frontendPowerRequired = 0;
  backendProgress = 0;
  frontendProgress = 0;
  duration = 1;
  income = 0.0;

  constructor(index, id, name, backendPowerRequired, frontendPowerRequired, duration, income) {
    this.#index = index;
    this._id = id;
    this.name = name;
    this.backendPowerRequired = backendPowerRequired;
    this.frontendPowerRequired = frontendPowerRequired;
    this.duration = duration;
    this.income = income;
  }

  getIndex() {
    return this.#index;
  }

  getId() {
    return this._id;
  }

  getBackendProgress() {
    return this.backendProgress;
  }

  getFrontendProgress() {
    return this.frontendProgress;
  }

  getName() {
    return this.name;
  }

  getBackendPowerRequired() {
    return this.backendPowerRequired;
  }

  getFrontendPowerRequired() {
    return this.frontendPowerRequired;
  }

  getDuration() {
    return this.duration;
  }

  getIncome() {
    return this.income;
  }


}
