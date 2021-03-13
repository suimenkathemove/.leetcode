import * as fs from "fs";

// const input = `84 97 66
// 79 89 11
// 61 59 7
// 7
// 89
// 7
// 87
// 79
// 24
// 84
// 30`;
const input = fs.readFileSync("/dev/stdin", "utf8");

const [A, ...N] = input
  .split(`\n`)
  .reduce<[number[][], ...number[]]>(
    (acc, cur, idx) =>
      idx <= 2
        ? [[...acc[0], cur.split(" ").map(Number)]]
        : [...acc, Number(cur)],
    [[]]
  );

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const LENGTH = 3;
const rows = [...range(0, LENGTH)];
const columns = [...range(0, LENGTH)];
const M = rows.map(() => columns.map(() => false));

N.forEach((n) => {
  A.forEach((aRow, i) => {
    aRow.forEach((a, j) => {
      if (a === n) {
        M[i][j] = true;
      }
    });
  });
});

if (
  rows.some((r) => columns.every((c) => M[r][c])) ||
  columns.some((c) => rows.every((r) => M[r][c])) ||
  rows.every((r) => columns.every((c) => r !== c || M[r][c])) ||
  rows.every((r) => columns.every((c) => r + c !== 3 - 1 || M[r][c]))
) {
  console.log("Yes");
} else {
  console.log("No");
}
