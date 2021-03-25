class Heap {
  constructor(public data: number[]) {}

  push(item: number) {
    this.data.push(item);
  }

  pop() {
    return this.data.sort().shift();
  }
}

// demo

const heap = new Heap([4]);

for (let i = 3; i > 0; i--) {
  heap.push(i);
}

console.log(heap.data);

console.log(heap.pop());
