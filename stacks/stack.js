class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }

    push(item) {
        this.#stack.push(item);
    }

    pop() {
        this.#stack = this.#stack.pop();
    }

    peek() {
        return this.#stack[this.#stack.length - 1];
    }
}

module.exports = Stack;

const newStack = new Stack();
newStack.push("[hi");
newStack.push("what");
newStack.push("last");
console.log(newStack.peek());