const range = (
  func: (i: number, index: number) => void,
  ...args: [end: number] | [start: number, end: number, step?: number]
) => {
  // @ts-expect-error
  const [start = 0, end, step = start < end ? 1 : -1]: [
    number,
    number,
    number
  ] = args.length === 1 ? [void 0, ...args] : args;

  let index = 0;

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    func(i, index);

    index++;
  }
};
class Heap<T extends [number, number]> {
  constructor(private _data: T[]) {}

  // @ts-ignore
  get data(): Readonly<T[]> {
    return this._data;
  }

  push(item: T) {
    this._data.push(item);
  }

  pop() {
    return this._data.sort(([a], [b]) => a - b).shift();
  }
}

const main = (lines: string[]): void => {
  const N = Number(lines[0]);

  const graph: [v: number, c: number][][] = [];
  range((i) => {
    graph[i] = [];
  }, N);
  lines.slice(1).forEach((str) => {
    const [u, v, c] = str.split(" ").map(Number);

    graph[u].push([v, c]);
    graph[v].push([u, c]);
  });

  const marked: boolean[] = [];
  range((i) => {
    marked[i] = false;
  }, N);

  let markedCount = 0;

  const heap = new Heap<[number, number]>([]);

  graph[0].forEach(([i, c]) => {
    heap.push([c, i]);
  });
  marked[0] = true;
  markedCount++;

  let sum = 0;

  while (markedCount < N) {
    const [c, i] = heap.pop()!;

    if (marked[i]) {
      continue;
    }

    marked[i] = true;
    markedCount++;

    sum += c;

    graph[i].forEach(([j, c]) => {
      if (marked[j]) {
        return;
      }

      heap.push([c, j]);
    });
  }

  console.log(sum);
};

const input = `5
0 1 10
0 4 30
1 2 10
1 4 20
2 3 30
2 4 20
3 4 10`;
export const mainReturn = main(input.split("\n"));
