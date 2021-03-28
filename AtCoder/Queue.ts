class Queue {
  constructor(private _data: number[]) {}

  get data() {
    const data: Readonly<Queue["_data"]> = this._data;
    return data;
  }

  push(item: number) {
    this._data.push(item);
  }

  pop() {
    return this._data.shift();
  }
}

// demo

const queue = new Queue([0]);

for (let i = 1; i < 3; i++) {
  queue.push(i);
}

console.log(queue.data);

console.log(queue.pop());
