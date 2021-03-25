class Heap {
  constructor(private _data: [number, number][]) {}

  get data() {
    const data: Readonly<Heap["_data"]> = this._data;
    return data;
  }

  push(item: [number, number]) {
    this._data.push(item);
  }

  pop() {
    return this._data.sort(([a], [b]) => a - b).shift();
  }
}

const input = `5
0 1 10
0 4 30
1 2 10
1 4 20
2 3 30
2 4 20
3 4 10`;

const splitInput = input.split("\n");

const N = Number(splitInput[0]);

const G: [number, number][][] = (() => {
  const arr: [number, number][][] = (() => {
    const arr: [number, number][][] = [];
    for (let i = 0; i < N; i++) {
      arr.push([]);
    }
    return arr;
  })();

  splitInput.slice(1).forEach((s) => {
    const [ai, bi, c] = s.split(" ").map(Number);

    arr[ai].push([bi, c]);
    arr[bi].push([ai, c]);
  });

  return arr;
})();

const marked: boolean[] = (() => {
  const arr: boolean[] = [];

  for (let i = 0; i < 5; i++) {
    arr.push(false);
  }

  return arr;
})();

let markCount = 0;

marked[0] = true;

markCount++;

const heap = new Heap([]);

G[0].forEach(([j, c]) => {
  heap.push([c, j]);
});

let sum = 0;

while (markCount < N) {
  const [c, i] = heap.pop();

  if (marked[i]) {
    continue;
  }

  marked[i] = true;
  markCount++;

  sum += c;

  for (const [j, c] of G[i]) {
    if (marked[j]) {
      continue;
    }

    heap.push([c, j]);
  }
}

console.log(sum);
