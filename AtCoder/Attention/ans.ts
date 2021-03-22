function* range(...args: [number, number] | [number]) {
  const [start, end] = args.length === 2 ? args : [0, ...args];

  for (let i = start; i < end; i++) {
    yield i;
  }
}

import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `5
// WEEWW`;

const splitInput = input.split("\n");

const N = Number(splitInput[0]);

const S = splitInput[1].split("") as ("E" | "W")[];

const sumW = [0];
[...range(N)].forEach((n) => {
  sumW.push(S[n] === "W" ? sumW[n] + 1 : sumW[n]);
});

const ans = [...range(N)].reduce((acc, cur) => {
  const w = sumW[cur];
  const e = N - 1 - cur - (sumW[N] - sumW[cur + 1]);
  const turn = w + e;

  return Math.min(turn, acc);
}, 300000);

console.log(ans);
