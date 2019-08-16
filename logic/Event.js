export default class Event {
  #index = 0;
  _id = "";
  name = "";
  about = "";
  moneyInfluence = 0;
  timeInfluence = 0;

  constructor(index, id, name, about, moneyInfluence, timeInfluence) {
    this.#index = index;
    this._id = id;
    this.name = name;
    this.about = about;
    this.moneyInfluence = moneyInfluence;
    this.timeInfluence = timeInfluence;
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

  getAbout() {
    return this.about;
  }

  getMoneyInfluence() {
    return this.moneyInfluence;
  }

  getTimeInfluence() {
    return this.timeInfluence;
  }

}
