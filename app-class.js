function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }

    throw new Error(
        `Please Check "${selection}" selector, no such element exists`
    );
}

class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
    }
}