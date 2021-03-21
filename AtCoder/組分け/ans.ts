function* range(...args: [number, number] | [number]) {
  const [start, end] = args.length === 2 ? args : [0, ...args];

  for (let i = start; i < end; i++) {
    yield i;
  }
}

import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `6
// 10 10 -10 -10 -10
// 10 -10 -10 -10
// -10 -10 -10
// 10 -10
// -10`;

const splitInput = input.split("\n");

const N = Number(splitInput[0]);

const A = [...range(N - 1)].map((i) => [
  ...[...range(i + 1)].map(() => 0),
  ...splitInput.slice(1)[i].split(" ").map(Number),
]);

const ALL = 1 << N;

const happy = [...range(ALL)].map(() => 0);

const hasBit = (n: number, i: number) => (n & (1 << i)) > 0;

[...range(ALL)].forEach((n) => {
  [...range(N)].forEach((i) => {
    [...range(i + 1, N)].forEach((j) => {
      if (hasBit(n, i) && hasBit(n, j)) {
        happy[n] += A[i][j];
      }
    });
  });
});

let ans = -(10 ** 100);

[...range(ALL)].forEach((n1) => {
  [...range(ALL)].forEach((n2) => {
    if ((n1 & n2) > 0) {
      return;
    }
    const n3 = ALL - 1 - (n1 | n2);
    ans = Math.max(ans, happy[n1] + happy[n2] + happy[n3]);
  });
});

console.log(ans);
