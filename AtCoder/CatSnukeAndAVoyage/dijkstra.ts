function* range(...args: [start: number] | [start: number, end: number]) {
  const [start, end] = args.length === 1 ? [0, ...args] : args;

  for (let i = start; i < end; i++) {
    yield i;
  }
}

class Heap {
  constructor(public data: [number, number][]) {}

  push(item: [number, number]) {
    this.data.push(item);
  }

  pop() {
    return this.data.sort(([a], [b]) => a - b).shift();
  }
}

const input = `3 2
1 2
2 3`;

const splitInput = input.split("\n");

const [N] = splitInput[0].split(" ").map(Number);

const G: number[][] = (() => {
  const arr: number[][] = [...range(N)].map(() => []);

  splitInput.slice(1).forEach((s) => {
    let [ai, bi] = s.split(" ").map(Number);

    ai -= 1;
    bi -= 1;

    arr[ai].push(bi);
    arr[bi].push(ai);
  });

  return arr;
})();

const dist = [...range(N)].map(() => -1);

const heap = new Heap([[0, 0]]);

dist[0] = 0;

while (heap.data.length > 0) {
  const [_, i] = heap.pop();

  G[i].forEach((j) => {
    const x = 1;

    if (dist[j] === -1 || dist[j] > dist[i] + x) {
      dist[j] = dist[i] + x;
      heap.push([dist[j], j]);
    }
  });
}

console.log(dist[N - 1] === 2 ? "POSSIBLE" : "IMPOSSIBLE");
