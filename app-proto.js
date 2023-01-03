function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please Check "${selection}" selector, no such element exists`
    );
}

function Counter (element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // bind this to all functions
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset =  this.reset.bind(this);
}