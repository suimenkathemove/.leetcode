class Heap {
  constructor(private _data: number[]) {}

  get data() {
    const data: Readonly<Heap["_data"]> = this._data;
    return data;
  }

  push(item: number) {
    this._data.push(item);
  }

  pop() {
    return this._data.sort().shift();
  }
}

// demo

const heap = new Heap([4]);

for (let i = 3; i > 0; i--) {
  heap.push(i);
}

console.log(heap.data);

console.log(heap.pop());
