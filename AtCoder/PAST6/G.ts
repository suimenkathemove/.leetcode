function* range(
  ...args: [end: number] | [start: number, end: number, step?: number]
) {
  // @ts-expect-error
  const [start = 0, end, step = start < end ? 1 : -1]: [
    number,
    number,
    number
  ] = args.length === 1 ? [void 0, ...args] : args;

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    yield i;
  }
}

class Queue<T> {
  private _data: T[] = [];

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

const main = (inputRows: string[]): void => {
  const [N, M, Q] = inputRows.splice(0, 1)[0].split(" ").map(Number);

  const graph: [number, number][][] = [...range(N)].map(() => []);
  inputRows.splice(0, M).forEach((v) => {
    let [A, B, C] = v.split(" ").map(Number);

    A--;
    B--;

    graph[A].push([B, C]);
    graph[B].push([A, C]);
  });

  const X = inputRows[0].split(" ").map(Number);
};

const input = `3 3 4
1 2 7
1 3 3
2 3 5
2 4 6 8`;
export const mainReturn = main(input.split("\n"));
// main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
