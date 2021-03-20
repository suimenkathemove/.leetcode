import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `3 4
// 1S23
// 4567
// 89G1`;

const splitInput = input.split(`\n`);

const [N, M] = splitInput[0].split(" ").map(Number);

const A = splitInput.slice(1).map((str) => str.split(""));

const group: [number, number][][] = (() => {
  const arr: [number, number][][] = (() => {
    const arr: any[][][] = [];
    for (let i = 0; i < 11; i++) {
      arr.push([]);
    }
    return arr as [number, number][][];
  })();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      switch (A[i][j]) {
        case "S":
          arr[0].push([i, j]);
          break;
        case "G":
          arr[10].push([i, j]);
          break;
        default:
          arr[Number(A[i][j])].push([i, j]);
      }
    }
  }

  return arr;
})();

const INF = 10 ** 100;

const cost = (() => {
  const arr: number[][] = [];
  for (let i = 0; i < N; i++) {
    const arr2 = [];
    for (let j = 0; j < M; j++) {
      arr2.push(INF);
    }
    arr.push(arr2);
  }
  return arr;
})();

const [si, sj] = group[0][0];
cost[si][sj] = 0;

for (let n = 1; n < 11; n++) {
  for (let [i, j] of group[n]) {
    for (let [i2, j2] of group[n - 1]) {
      cost[i][j] = Math.min(
        cost[i][j],
        cost[i2][j2] + Math.abs(i - i2) + Math.abs(j - j2)
      );
    }
  }
}

const [gi, gj] = group[10][0];
const ans = cost[gi][gj];

console.log(ans !== INF ? ans : -1);
