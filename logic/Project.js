export default class Project {

  #id = "";
  #name = "";
  #backendPowerRequired = 0;
  #frontendPowerRequired = 0;
  #backendProgress = 0;
  #frontendProgress = 0;
  #duration = 1;
  #backendProgressValue = 0.0;
  #frontendProgressValue = 0.0;

  constructor(id, name, backendPowerRequired, frontendPowerRequired, duration) {
    this.#id = id;
    this.#name = name;
    this.#backendPowerRequired = backendPowerRequired;
    this.#frontendPowerRequired = frontendPowerRequired;
    this.#duration = duration;
  }

  getId() {
    return this.#id;
  }

  getBackendProgress() {
    return this.#backendProgress;
  }

  getFrontendProgress() {
    return this.#frontendProgress;
  }

  getName() {
    return this.#name;
  }

  getBackendPowerRequired() {
    return this.#backendPowerRequired;
  }

  getFrontendPowerRequired() {
    return this.#frontendPowerRequired;
  }

  getDuration() {
    return this.#duration;
  }

}
