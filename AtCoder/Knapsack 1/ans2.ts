const range = (
  ...args: [end: number] | [start: number, end: number, step?: number]
): number[] => {
  const arr: number[] = [];

  const [start = 0, end, step = 1] =
    args.length === 1 ? [void 0, ...args] : args;

  let i = start;
  while (step > 0 ? i < end : i > end) {
    arr.push(i);
    i += step;
  }

  return arr;
};

// import * as fs from "fs";

// const input = fs.readFileSync("/dev/stdin", "utf8");
const input = `3 8
3 30
4 50
5 60`;

const main = () => {
  const splitInput = input.split("\n");

  const [N, W] = splitInput[0].split(" ").map(Number);

  const ws = [0];
  const vs = [0];
  splitInput.slice(1).forEach((str) => {
    const [w, v] = str.split(" ").map(Number);

    ws.push(w);
    vs.push(v);
  });

  const value = range(N + 1).map(() => range(W + 1).map(() => 0));

  value[0][0];

  range(1, N + 1).forEach((i) => {
    range(1, W + 1).forEach((w) => {
      value[i][w] = Math.max(value[i][w], value[i - 1][w]);

      if (w >= ws[i]) {
        value[i][w] = Math.max(value[i][w], value[i - 1][w - ws[i]] + vs[i]);
      }
    });
  });

  const ans = Math.max(...value[N]);
  console.log(ans);
};

export const ans = main();
