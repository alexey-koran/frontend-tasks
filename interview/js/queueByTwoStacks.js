// Реализовать очередь с помощью двух стеков

class Stack {
  constructor() {
    this.storage = [];
  }

  push(data) {
    this.storage.push(data);
    return data;
  }

  pop() {
    return this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(data) {
    this.firstStack.push(data);
    return data;
  }

  dequeue() {
    if (this.secondStack.size() === 0) {
      if (!this.firstStack.size()) {
        return null;
      }

      const firstStackLength = this.firstStack.size();

      for (let i = 0; i < firstStackLength; i++) {
        this.secondStack.push(this.firstStack.pop());
      }
    }

    return this.secondStack.pop();
  }

  count() {
    return this.firstStack.size() + this.secondStack.size();
  }
}

const queue = new Queue();

queue.enqueue(1); // add 1
queue.enqueue(2); // add 2

queue.dequeue(); // return 1

queue.enqueue(3); // add 3
queue.enqueue(4); // add 4

queue.dequeue(); // return 2

queue.dequeue(); // return 3
