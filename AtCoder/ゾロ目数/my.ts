// import * as fs from "fs";

// const input = fs.readFileSync("/dev/stdin", "utf8");
// const N = Number(input);

const createDoublet = (x: number, n: number) => {
  let carry = 0;
  for (let i = 0; i < n; i++) {
    carry = carry * 10 + 1;
  }
  return x * carry;
};

const main = (N: number): void => {
  const x = N % 9 || 9;
  const n = Math.ceil(N / 9);

  console.log(createDoublet(x, n));
};

for (let N = 1; N <= 50; N++) {
  main(N);
}
