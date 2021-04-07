import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
// const input = `6
// 30 10 60 10 60 50`;

const splitInput = input.split("\n");

const hs = splitInput[1].split(" ").map(Number);

const cost = hs.map(() => 0);

hs.forEach((h, index) => {
  switch (index) {
    case 0:
      break;
    case 1:
      cost[index] = cost[index - 1] + Math.abs(hs[index - 1] - h);
      break;
    default:
      cost[index] = Math.min(
        cost[index - 1] + Math.abs(hs[index - 1] - h),
        cost[index - 2] + Math.abs(hs[index - 2] - h)
      );
  }
});

console.log(cost[cost.length - 1]);
