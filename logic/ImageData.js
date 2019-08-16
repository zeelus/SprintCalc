export default class ImageData {
  #index = 0;
  key = "";
  value = "";

  constructor(index, key, value) {
    this.#index = index;
    this.key = key;
    this.value = value;
  }

  getIndex() {
    return this.#index;
  }

  getKey() {
    return this.key;
  }

  getValue() {
    return this.value;
  }
}
