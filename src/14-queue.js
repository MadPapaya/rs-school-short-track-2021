const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.oldIndex = 1;
    this.newIndex = 1;
    this.data = {};
    ListNode();
  }

  get size() {
    return this.oldIndex - this.newIndex;
  }

  enqueue(element) {
    this.data[this.newIndex] = element;
    this.newIndex++;
  }

  dequeue() {
    let delItem;
    if (this.oldIndex !== this.newIndex) {
      delItem = this.data[this.oldIndex];
      delete this.data[this.oldIndex];
      this.oldIndex++;
    }
    return delItem;
  }
}

module.exports = Queue;
