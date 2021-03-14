import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `7 8
// 2 2
// 4 5
// ########
// #......#
// #.######
// #..#...#
// #..##..#
// ##.....#
// ########`;

const splitInput = input.split("\n");

const [R, C] = splitInput[0].split(" ").map(Number);

const [sy, sx] = splitInput[1].split(" ").map((v) => Number(v) - 1);

const [gy, gx] = splitInput[2].split(" ").map((v) => Number(v) - 1);

const S = splitInput.slice(3).map((s) => s.split(""));

const dist = S.map((sRow) => sRow.map(() => -1));

const Q = [[sy, sx]];
dist[sy][sx] = 0;

while (Q.length > 0) {
  const [i, j] = Q.shift();

  [
    [i + 1, j],
    [i - 1, j],
    [i, j + 1],
    [i, j - 1],
  ].forEach(([i2, j2]) => {
    if (!(0 <= i2 && i2 < R && 0 <= j2 && j2 < C)) {
      return;
    }

    if (S[i][j] === "#") {
      return;
    }

    if (dist[i2][j2] === -1) {
      dist[i2][j2] = dist[i][j] + 1;
      Q.push([i2, j2]);
    }
  });
}

console.log(dist[gy][gx]);
