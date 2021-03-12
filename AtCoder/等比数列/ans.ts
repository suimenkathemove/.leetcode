import * as fs from "fs";

const [A, R, N] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

// const A = 2;
// const R = 3;
// const N = 4;

const solve = (A: number, R: number, N: number): number | "large" => {
  for (let i = 0; i < N - 1; i++) {
    A *= R;

    if (A > 10 ** 9) {
      return "large";
    }
  }

  return A;
};

const ans = solve(A, R, N);

console.log(ans);
