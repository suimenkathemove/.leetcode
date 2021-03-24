function range(
  ...args: [end: number] | [start: number, end: number, step?: number]
) {
  const arr = [];

  const [start = 0, end, step = 1] =
    args.length === 1 ? [void 0, ...args] : args;

  let i = start;
  while (step > 0 ? i < end : i > end) {
    arr.push(i);
    i += step;
  }

  return arr;
}

// import * as fs from "fs";

// const input = fs.readFileSync("/dev/stdin", "utf8");
const input = `3
1 3
2 2
2 4`;

const splitInput = input.split("\n");

const N = Number(splitInput[0]);

const X: number[][] = range(N).map(() => []);

splitInput.slice(1).forEach((s) => {
  const [a, b] = s.split(" ").map(Number);
  X[a - 1].push(b);
});

const cnt: number[] = range(101).map(() => 0);

let ans = 0;

range(N).forEach((d) => {
  X[d].forEach((b) => {
    cnt[b] += 1;
  });

  for (const b of range(100, 0, -1)) {
    if (cnt[b] > 0) {
      ans += b;
      cnt[b] -= 1;
      break;
    }
  }

  console.log(ans);
});
