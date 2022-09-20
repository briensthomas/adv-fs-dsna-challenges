class Queue {
  #queue = [];

  constructor(queue) {
    if (queue) this.#queue = queue;
  }

  enqueue(item) {
    this.#queue.push(item);
  }

  dequeue() {
    this.#queue.shift();
    if (this.#queue.length === 0) {
      return null;
    } else {
      return this.#queue;
    }
  }

  hasNext() {
    if (this.#queue.length >= 1) {
      return true;
    } else {
      return false;
    }
  }

  get queue() {
    return this.#queue;
  }
}

module.exports = { Queue };
