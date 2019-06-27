export class Outcome {

    #_moneyInfluence = 0;
    #_timeInfluence = 0;

    constructor(moneyInfluence, timeInfluence) {
        this.#_moneyInfluence = moneyInfluence;
        this.#_timeInfluence = timeInfluence;
    }

    get moneyInfluence() {
        return this.#_moneyInfluence;
    }

    get timeInfluence() {
        return this.#_timeInfluence;
    }

}

export default class Event {

    #_outcome;
    _name = "";

    constructor(outcome, name) {
        this._outcome = outcome;
        this._name = name;
    }

    get outcome() {
        return this.#_outcome;
    }

    get name() {
        return this._name;
    }

}