import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `3 8
// 3 30
// 4 50
// 5 60`;

const splitInput = input.split("\n");

const [N, W] = splitInput[0].split(" ").map(Number);

const [ws, vs] = (() => {
  const ws: number[] = [0];
  const vs: number[] = [0];
  splitInput.slice(1).forEach((str) => {
    const [w, v] = str.split(" ").map(Number);
    ws.push(w);
    vs.push(v);
  });
  return [ws, vs];
})();

const value = (() => {
  const value: number[][] = [];
  for (let i = 0; i < N + 1; i++) {
    const value2: number[] = [];
    for (let j = 0; j < W + 1; j++) {
      value2.push(-(10 ** 18));
    }
    value.push(value2);
  }
  return value;
})();

value[0][0] = 0;

for (let i = 1; i < N + 1; i++) {
  for (let w = 0; w < W + 1; w++) {
    value[i][w] = Math.max(value[i][w], value[i - 1][w]);

    if (w - ws[i] >= 0) {
      value[i][w] = Math.max(value[i][w], value[i - 1][w - ws[i]] + vs[i]);
    }
  }
}

const ans = Math.max(...value[N]);
console.log(ans);
