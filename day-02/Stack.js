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

  reverse(array) {
    const n = array.length;
    const stack = new Stack();

    for (let i = n - 1; i >= 0; i--) {
      stack.push(array[i]);
    }

    return stack.#list;
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
