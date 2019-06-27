export default class Score {

    #_money = 1000;
    #_projectsStarted = 0;
    #_projectsDone = 0;

    constructor() {
        // ...
    }

    get money() {
        return this.#_money;
    }

    get projectsStarted() {
        return this.#_projectsStarted;
    }

    get projectsDone() {
        return this.#_projectsDone;
    }

    set money(value) {
        this.#_money = value;
    }

    set projectsStarted(value) {
        this.#_projectsStarted = value;
    }

    set projectsDone(value) {
        this.#_projectsDone = value;
    }
}