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

const info = [...range(N)].map((n) =>
  S.reduce(
    (acc, cur, idx) =>
      (idx < n && cur === "W") || (n < idx && cur === "E") ? acc + 1 : acc,
    0
  )
);

const ans = Math.min(...info);

console.log(ans);
