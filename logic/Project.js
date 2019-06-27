
export default class Project {

    name = "";
    backendPowerRequired = 0;
    frontendPowerRequired = 0;
    #backendProgress = 0;
    #frontendProgress = 0;
    duration = 1;

    constructor(name, backendPowerRequired, frontendPowerRequired, duration) {
        this.name = name;
        this.backendPowerRequired = backendPowerRequired;
        this.frontendPowerRequired = frontendPowerRequired;
        this.duration = duration;
    }

    get backendProgress() {
        return this.#backendProgress;
    }

    get frontendProgress() {
        return this.#frontendProgress;
    }

    get name() {
        return this.name;
    }

    get backendPowerRequired() {
        return this.backendPowerRequired;
    }

    get frontendPowerRequired() {
        return this.frontendPowerRequired;
    }

    get duration() {
        return this.duration;
    }

    set backendProgress(value) {
        this.#backendProgress = value;
    }

    set frontendProgress(value) {
        this.#frontendProgress = value;
    }
}