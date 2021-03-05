// import * as fs from "fs";

// const input = fs.readFileSync("/dev/stdin", "utf8");
// const N = Number(input);

const func = (n: number) => {
  let carry = 0;
  for (let i = 0; i < n; i++) {
    carry = carry * 10 + 1;
  }
  return carry;
};

const main = (N: number): void => {
  const a = N % 9 || 9;
  const b = Math.trunc(N / 9);
  const c = a !== 9 ? b + 1 : b;

  console.log(func(c) * a);
};

for (let N = 1; N <= 50; N++) {
  main(N);
}
