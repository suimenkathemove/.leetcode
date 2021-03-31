class Queue<T> {
  constructor(private _data: T[]) {}

  // @ts-ignore
  get data(): Readonly<T[]> {
    return this._data;
  }

  push(item: T) {
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
