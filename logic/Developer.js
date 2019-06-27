export default class Developer {

    #cost = 0;
    #backendPower = 0;
    #frontendPower = 0;

    constructor(cost, backendPower, frontendPower) {
        this.#cost = cost;
        this.#backendPower = backendPower;
        this.#frontendPower = frontendPower;
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