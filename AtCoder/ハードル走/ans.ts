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

import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `10 19
// 1 3 4 5 7 8 10 13 15 17
// 2 1000 10`;

const main = () => {
  const splitInput = input.split("\n");

  const [N, L] = splitInput[0].split(" ").map(Number);
  const X = splitInput[1].split(" ").map(Number);
  const [T1, T2, T3] = splitInput[2].split(" ").map(Number);

  const H = range(L + 1).map(() => false);
  X.forEach((x) => {
    H[x] = true;
  });
  const cost = range(L + 1).map(() => 10 ** 100);

  cost[0] = 0;

  range(1, L + 1).forEach((i) => {
    cost[i] = Math.min(cost[i], cost[i - 1] + T1);

    if (i >= 2) {
      cost[i] = Math.min(cost[i], cost[i - 2] + T1 + T2);
    }

    if (i >= 4) {
      cost[i] = Math.min(cost[i], cost[i - 4] + T1 + 3 * T2);
    }

    if (H[i]) {
      cost[i] += T3;
    }
  });

  let ans = cost[L];
  [L - 3, L - 2, L - 1].forEach((i) => {
    if (i >= 0) {
      ans = Math.min(
        ans,
        cost[i] + Math.trunc(T1 / 2) + Math.trunc((T2 * (2 * (L - i) - 1)) / 2)
      );
    }
  });

  console.log(ans);
};

export const ans = main();
