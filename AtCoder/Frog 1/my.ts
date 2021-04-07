import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `6
// 30 10 60 10 60 50`;

const splitInput = input.split("\n");

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

const main = () => {
  const N = Number(splitInput[0]);

  const hs = splitInput[1].split(" ").map(Number);

  const cost = range(N).map(() => 0);

  range(N).forEach((n) => {
    switch (n) {
      case 0:
        break;
      case 1:
        cost[n] = Math.abs(hs[n - 1] - hs[n]) + cost[n - 1];
        break;
      default:
        cost[n] = Math.min(
          Math.abs(hs[n - 1] - hs[n]) + cost[n - 1],
          Math.abs(hs[n - 2] - hs[n]) + cost[n - 2]
        );
    }
  });

  console.log(cost[N - 1]);
};

export const ans = main();
