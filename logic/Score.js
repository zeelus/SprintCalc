export default class Score {

    #money = 1000;
    #projectsStarted = 0;
    #projectsDone = 0;

    constructor() {
        // ...
    }

    get money() {
        return this.#money;
    }

    get projectsStarted() {
        return this.#projectsStarted;
    }

    get projectsDone() {
        return this.#projectsDone;
    }

    set money(value) {
        this.#money = value;
    }

    set projectsStarted(value) {
        this.#projectsStarted = value;
    }

    set projectsDone(value) {
        this.#projectsDone = value;
    }
}