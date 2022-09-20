class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    this.#list.push(item); 
  }

  pop() {
    this.#list.pop();
    return this.#list;
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
  get list() {
    return this.#list;
  }
}

const dataStructure = new Stack([4, 3, 2]);
console.log('AddBack function', dataStructure.push(1));
console.log('Remove Back function', dataStructure.pop());

module.exports = { Stack };
