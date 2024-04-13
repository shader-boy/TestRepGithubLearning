class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

class Queue2 {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(el) {
    this.items[this.rear] = el;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }
}

// const a = 2;
// const b = '2'
// console.log(a+b);
// console.log(typeof a + b)

localStorage.setItem("name", "bob");
localStorage.setItem("name2", "samir");
console.log(localStorage.getItem("name2"));

document.cookie = "name=bob; expires=" + new Date(2024, 0, 19).toUTCString();

// another test code added here to test Github connection

function greetPerson(name) {
  console.log(`Hi dear ${name}`);
}
