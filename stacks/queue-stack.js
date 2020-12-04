class Queue {
    queue;

    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        this.queue.shift();
    }
}

const queue = new Queue();

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue()); // prints 4
console.log(queue.queue);
console.log(queue.dequeue()); // prints 5
console.log(queue.queue);
console.log(queue.dequeue()); // prints 6
console.log(queue.queue);
