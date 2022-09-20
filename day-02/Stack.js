class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    this.#list.push(item); 
  }

  pop() {
    if (this.#list.length === 0) {
      return null;
    } else {
      this.#list.pop();
      return this.#list;
    }
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
